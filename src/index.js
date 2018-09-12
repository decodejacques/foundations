import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import firebase from './firebase'

let db = firebase.firestore();

let deepEqual = function (x, y) {
    if (x === y) {
        return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;

        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            }
            else
                return false;
        }

        return true;
    }
    else
        return false;
}


let devToolsExtension = undefined
if (process.env.NODE_ENV === 'development') {
    devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}
window.g = devToolsExtension
let prettyType = t => {
    switch (t) {
        case 'addframe':
            return 'Add a frame'
        case 'destroyframe':
            return 'Destroy a frame'
        case 'addobject':
            return 'Add an object'
        case 'addFunction':
            return 'Add a function'
        case 'pushcallstack':
            return 'Push to the call stack'
        case 'addrow':
            return 'Add a row'
        case 'reference':
            return 'Place a reference'
        case 'primitive':
            return 'Place a Value'
        case 'popcallstack':
            return 'Pop the callstack'
    }
}
let prettyAction = (a) => {
    switch (a.type) {
        case 'addframe':
            return 'addframe'
        case 'destroyframe':
            return 'destroyframe'
        case 'addobject':
            return 'addobject'
        case 'addFunction':
            return 'added a function at line ' + a.lineNumber
        case 'pushcallstack':
            return 'pushed ' + a.lineNumber + ' to the call stack'
        case 'addrow':
            return 'added an entry called ' +
                a.name +
                ' to the number ' +
                (a.boxNumber + 1) +
                ' box on the ' +
                a.boxColumn
        case 'reference':
            return 'created a reference from row number ' + (a.originRow + 1) +
                ' the box number ' + (a.originBox + 1) +
                ' on the ' + a.originCol +
                ' to the box number ' + (a.destinationBox + 1) +
                ' on the ' + a.destinationCol
        case 'primitive':
            return [
                'added the primitive ',
                a.primitive,
                ' to the row number ',
                (a.row + 1),
                '  of box number ',
                (a.boxNumber + 1),
                ' on the ',
                a.column
            ].join("")
        default: "error: unknown action. talk to jacques."
    }
}

let keydownHandler = x => { }
document.addEventListener('keydown', e => {
    keydownHandler(e)
})

const reducer = (state, action) => {

    if (action.type === "@@INIT") {
        return state
    }

    if (action.type === 'devtest') {
        return { ...state, devtest: true }
    }

    if (action.type === 'keydownHandler') {
        console.log(action.keydownHandler)
        keydownHandler = action.keydownHandler
        return state
    }

    if (action.type === 'signin') {
        return { ...state, uid: action.uid }
    }

    if (action.type === 'setMistakes') {
        return { ...state, mistakes: action.mistakes }
    }


    if (action.type === "reset") {
        db.collection("users").doc(state.uid).collection(action.chapter + '-' + action.exerciseNumber).doc().set({
            startTime: new Date() / 1
        })
        return { ...initialState, mistakes: state.mistakes, actionHistory: action.content, originalHistory: action.content, uid: state.uid, devtest: state.devtest, chapter: action.chapter, exerciseNumber: action.exerciseNumber, startTime: new Date() / 1 }

    }

    //if (action.type === 'setActionHistory') {

    //}
    if (action.type === "upkey") {
        if (state.addRowBoxSelectMode || state.placeValueSelectBox) {
            return { ...state, boxNumber: Math.max(0, state.boxNumber - 1) }
        }
        if (state.addReferenceSelectDestinationRow || state.addReferenceSelectOriginRow || state.placeValueSelectRow) {
            return { ...state, rowNumber: Math.max(0, state.rowNumber - 1) }
        }
    }
    if (action.type === "downkey") {
        if (state.addRowBoxSelectMode || state.addReferenceSelectOriginBox || state.placeValueSelectBox || state.addReferenceSelectDestinationBox) {
            let maxIndex = state.columnSelected === 'left' ? state.numFrames : state.objects.length
            return { ...state, boxNumber: Math.min(maxIndex - 1, state.boxNumber + 1) }
        }
        if (state.addReferenceSelectOriginRow || state.placeValueSelectRow) {
            let currentRows = state.rows.filter(x => {
                return (x.boxNumber === state.boxNumber &&
                    x.boxColumn === state.columnSelected)
            })
            return { ...state, rowNumber: Math.min(currentRows.length - 1, state.rowNumber + 1) }
        }
    }
    if (action.type === "signalDone") {
        return {
            ...state,
            finished: state.finished.concat({
                chapter: action.chapter,
                exerciseNumber: action.exerciseNumber
            })
        }
    }
    //store.dispatch({type: "signalDone", chapter, exerciseNumber})

    if (action.type === "rightkey") {
        if (state.placeValueSelectRow) return state
        if (state.addReferenceSelectOriginRow) return state
        if (state.objects.length === 0) return state
        return { ...state, columnSelected: 'right', boxNumber: 0 }
    }
    if (action.type === "leftkey") {
        if (state.placeValueSelectRow) return state
        if (state.addReferenceSelectOriginRow) return state
        return { ...state, columnSelected: 'left', boxNumber: 0 }
    }

    let restart = (state) => {
        return {
            ...initialState,
            mistakes: state.mistakes,
            originalHistory: state.originalHistory,
            uid: state.uid,
            chapter: state.chapter,
            exerciseNumber: state.exerciseNumber,
            actionHistory: state.originalHistory,
            startTime: new Date() / 1
        }
    }

    // Start adding row 
    let ifRecord = (actual, newState) => {
        let expected = state.actionHistory[0]
        if (!deepEqual(expected, actual)) {
            if (expected.type !== actual.type) {
                window.alert('  You did:\n' + prettyType(actual.type) + '\n  But I expected:\n' + prettyType(expected.type))
            } else {
                window.alert('  You did:\n' + prettyAction(actual) + '\n  But I expected:\n' + prettyAction(expected))
            }
            if (state.devtest) return state;
            let mistake = {
                chapter: state.chapter,
                exerciseNumber: state.exerciseNumber,
                timestamp: new Date() / 1
            }
            db.collection("users").doc(state.uid).collection("mistakes").doc().set(mistake)
            //window.location.reload();
            return restart({ ...state, mistakes: state.mistakes.concat(mistake)})
        } else {
            if (state.actionHistory.length === 1) {
                db.collection("users").doc(state.uid).collection('finished').doc(state.chapter + '-' + state.exerciseNumber).set({
                    finishTime: new Date() / 1,
                    startTime: state.startTime,
                    chapter: state.chapter,
                    exerciseNumber: state.exerciseNumber
                })
                window.alert("Congratulations! You finished!")
                return { ...newState, actionHistory: [] }
                //window.location.reload();
            }
        }

        return { ...newState, actionHistory: state.actionHistory.slice(1) }
    }

    if (action.type === "escape") {
        return {
            ...state,
            addRowBoxSelectMode: false,
            addReferenceSelectOriginBox: false,
            addReferenceSelectOriginRow: false,
            addReferenceSelectDestinationBox: false,
            placeValueSelectBox: false,
            placeValueSelectRow: false
        }
    }

    if (action.type === "addrow") {
        return {
            ...state,
            addRowBoxSelectMode: true,
            columnSelected: 'left',
            boxNumber: 0
        };
    }


    if (action.type === "addrowinput") {
        let newAction = {
            boxNumber: state.boxNumber,
            boxColumn: state.columnSelected,
            name: action.left,
            type: 'addrow'
        }
        let newState = {
            ...state,
            addRowBoxSelectMode: false,
            rows: state.rows.concat(
                {
                    boxNumber: state.boxNumber,
                    boxColumn: state.columnSelected,
                    name: action.left
                })
        }
        return ifRecord(newAction, newState)
    }
    // end of add row

    if (action.type === "addframe") {
        return ifRecord({ type: 'addframe' }, {
            ...state,

            numFrames: state.numFrames + 1
        });
    }
    if (action.type === "destroyframe") {


        let references = state.references.filter(
            function (ref) {
                return !(
                    (ref.originBox === state.numFrames - 1 || ref.boxNumber === state.numFrames - 1) && (ref.originCol === "left" || ref.column === 'left')
                )
            });
        let rows = state.rows.filter(row =>
            row.boxNumber !== state.numFrames - 1 || row.boxColumn !== 'left')
        let newState = {
            ...state,

            references,
            rows,
            numFrames: state.numFrames - 1
        };
        return ifRecord({ type: 'destroyframe' }, newState)
    }
    if (action.type === "addobject") {
        let newState = {
            ...state,

            objects: state.objects.concat({ type: 'regular' })
        };
        return ifRecord({ type: 'addobject' }, newState)
    }
    if (action.type === "addfunction") {
        let newState = {
            ...state,

            objects: state.objects.concat({ type: 'function', lineNumber: action.lineNumber })
        };
        return ifRecord({ type: 'addFunction', lineNumber: action.lineNumber }, newState)
    }

    if (action.type === "pushcallstack") {
        let lineNumber = action.number
        let newState = {
            ...state,

            callstack: state.callstack.concat(lineNumber)
        }
        return ifRecord({ type: 'pushcallstack', lineNumber }, newState)
    }

    if (action.type === "popcallstack") {


        let newState = {
            ...state,

            callstack: [...state.callstack.slice(0, state.callstack.length - 1)]
        }
        return ifRecord({ type: 'popcallstack' }, newState)
    }

    // Adding a reference
    if (action.type === "addReferenceInit") {
        return {
            ...state,
            addReferenceSelectOriginBox: true,
            columnSelected: 'left',
            boxNumber: 0
        };
    }
    if (action.type === "addReferenceSelectOriginBoxDone") {
        let rowExists =
            state.rows.some(r => r.boxNumber === state.boxNumber &&
                r.boxColumn === state.columnSelected)
        if (!rowExists) return { ...state, addReferenceSelectOriginBox: false }

        return {
            ...state,
            addReferenceSelectOriginRow: true,
            addReferenceSelectOriginBox: false,
            rowNumber: 0,
            originBox: state.boxNumber,
            originCol: state.columnSelected
        };
    }
    if (action.type === "addReferenceSelectOriginRowDone") {
        return {
            ...state,
            addReferenceSelectDestinationBox: true,
            addReferenceSelectOriginRow: false,
            columnSelected: "left",
            boxNumber: 0,
            originRow: state.rowNumber
        };
    }
    if (action.type === "addReferenceSelectDestinationBoxDone") {

        let destinationBox = state.boxNumber
        let originBox = state.originBox
        let originCol = state.originCol
        let destinationCol = state.columnSelected
        let originRow = state.originRow



        let toAdd = {
            originBox,
            destinationBox,
            originRow,
            originCol,
            destinationCol,
            type: 'reference'
        }

        let references = state.references.filter(
            function (ref) {
                let sameref =
                    ref.originBox === originBox &&
                    ref.originCol === originCol &&
                    ref.originRow === originRow
                let sameprimitive =
                    ref.boxNumber === originBox &&
                    ref.column === originCol &&
                    ref.row === originRow

                return !sameref && !sameprimitive


            });

        let newState = {
            ...state,
            addReferenceSelectDestinationBox: false,
            references: references.concat(toAdd)
        };
        return ifRecord(toAdd, newState)

    }
    // end adding a reference

    // Adding a value
    if (action.type === "placeValueInit") {
        return {
            ...state,
            placeValueSelectBox: true,
            columnSelected: 'left',
            boxNumber: 0
        };
    }
    if (action.type === "placeValueSelectBoxDone") {
        let rowExists =
            state.rows.some(r => r.boxNumber === state.boxNumber &&
                r.boxColumn === state.columnSelected)
        if (!rowExists) return { ...state, placeValueSelectBox: false }
        return {
            ...state,
            placeValueSelectBox: false,
            placeValueSelectRow: true,
            rowNumber: 0
        };

    }
    if (action.type === "placeValueSelectRowDone") {
        let toAdd = {
            boxNumber: state.boxNumber,
            column: state.columnSelected,
            primitive: action.value,
            row: state.rowNumber,
            type: 'primitive'
        }

        let references = state.references.filter(
            function (ref) {
                let sameref =
                    ref.originBox === state.boxNumber &&
                    ref.originCol === state.columnSelected &&
                    ref.originRow === state.rowNumber
                let sameprimitive =
                    ref.boxNumber === state.boxNumber &&
                    ref.column === state.columnSelected &&
                    ref.row === state.rowNumber
                return !sameref && !sameprimitive
            });



        let newState = {
            ...state,

            placeValueSelectRow: false,
            references: references.concat(toAdd)
        };
        return ifRecord(toAdd, newState)
    }
    // End adding a value



    return state
}

let initialState = {
    finished: [],
    globalFrame: [],
    rows: [],
    // {boxNumber: 0,
    // boxColumn: "left",
    // name: "abd"}],
    //check: true,
    selected: 0,
    objects: [],
    // [
    //     { type: 'regular' },
    //     { type: 'function', lineNumber: 10 }
    // ],
    numFrames: 1,
    //currentLine: 1,
    callstack: [],

    // [3],
    actionHistory: [],
    //     {
    //         boxNumber: 0,
    //         boxColumn: 'left',
    //         name: 'boom',
    //         type: 'addrow'
    //     },
    //     {
    //         boxNumber: 0,
    //         boxColumn: 'left',
    //         name: 'bam',
    //         type: 'addrow'
    //     }
    // ],

    // [
    //     { name: 'hello', boxColumn: 'left', boxNumber: 0 },
    //     { name: 'byebye', boxColumn: 'right', boxNumber: 0 },
    // ],
    references: [],
    //  [{
    //     originBox: 0,
    //     destinationBox: 0,
    //     originRow: 0,
    //     destinationRow: 0,
    //     originCol: 'left',
    //     destinationCol: 'right',
    //     type: 'reference'
    // },
    // {
    //     boxNumber: 0,
    //     column: 'right',
    //     primitive: 'hello',
    //     row: 0,
    //     type: 'primitive'
    // }
    // ]
}

const store = createStore(reducer, initialState, devToolsExtension)
/*const myStorage = window.localStorage;
var localUID = myStorage.getItem('UID');*/

//if (process.env.NODE_ENV === 'development') {
//     store.dispatch({ type: 'signin', uid: "test123test" })
// } else {



// if(localUID) {
//     store.dispatch({ type: 'signin', uid: localUID })
//     db.collection("users").doc(localUID).collection("finished").get().then(query => {
//         console.log(query)
//     })
// } else {


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let p1 = db.collection("users").doc(user.uid).collection("finished")
            .onSnapshot(function (doc) {
                doc.forEach(x => {
                    x = x.data()
                    let chapter = x.chapter
                    let exerciseNumber = x.exerciseNumber
                    store.dispatch({ type: "signalDone", chapter, exerciseNumber })
                })
            });
        let p2 = Promise.all(user.providerData.map(function (profile) {
            db.collection("users").doc(user.uid).set({
                displayName: profile.displayName,
                email: profile.email,
                photoURL: profile.photoURL
            })
        }))
        let p3 = db.collection("users").doc(user.uid).collection("mistakes").get()
            .then(queryResult => {
                let mistakes = queryResult.docs.map(x => x.data());
                store.dispatch({ type: 'setMistakes', mistakes })


            })
        Promise.all([p1, p2, p3])
            .then(() => {
                localStorage.setItem('UID', user.uid);
                store.dispatch({ type: 'signin', uid: user.uid })
            })



    } else {
        // No user is signed in.
    }
});


let main = (<Provider store={store}><App /></Provider>)
ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
