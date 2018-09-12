import { connect } from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Main from './Main'
import React, { Component } from 'react';
import ContentData from './final.json'

import './Routes.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let contains = (arr, chapter, exerciseNumber) => {
    let ret = false
    arr.forEach(x => {
        if (x.chapter === chapter && x.exerciseNumber === exerciseNumber) {
            ret = true
        }
    })
    return ret
}

class Links extends Component {
    exerciseToJSX = (chapterName, exercise) => {
        let video = exercise.video ? (
            <span  > <a className="exerciseLink" href={exercise.video}> video solution </a></span>
        ) : null

        let name = exercise.name === "0.js" ? "Worked example" : exercise.name.split('.')[0]

        return (<div><Link className="exerciseLink" to={chapterName + '/' + exercise.name.split('.')[0]}> {name}</Link>
            <span className="finishedMarker"> {contains(this.props.finished, chapterName, exercise.name) ? "✔" : null}  </span>
            {video}
        </div>
        )
    }

    chapterToJSX = chapter => {
        let chapterNumber = parseInt(chapter.name.split('-')[0])
        let chapterTitle = capitalizeFirstLetter(chapter.name.split('-').slice(1).join(" "))
        return (<div className="chapterCard">
            <h4 className="chapterHeader"> {chapterNumber} - {chapterTitle} </h4>
            {chapter.exercises.map(exercise => this.exerciseToJSX(chapter.name, exercise))}
        </div>)
    }

    render() {
        return (<div className="allChapters">
            {ContentData.map(this.chapterToJSX)}
    </div>)
    }
}
let mapStateToProps = s => ({
    finished: s.finished,
})
let ConnectedLinks = connect(mapStateToProps)(Links)

//     <Route path="/01-primitives/1" render={() => <Main chapter={"01-primitives"} exerciseNumber={"1.js"} src={s3} solution={s4} />} />
let routifyExercise = (chapter, exercise, devtest) => {
    let path = "/" + chapter.name + "/" + exercise.name.split('.')[0];
    if(devtest) {
        path = '/devtest' + path
    }
    return (<Route
        path={path}
        render={() =>
            <Main chapter={chapter.name}
                exerciseNumber={exercise.name}
                src={exercise.source}
                devtest={devtest}
                solution={exercise.solution} />} />)
}

let routifyChapter = chapter => {
    return chapter.exercises.map(exercise => routifyExercise(chapter, exercise, false))
}

let routifyChapterDevTest = chapter => {
    return chapter.exercises.map(exercise => routifyExercise(chapter, exercise, true))
}


export default (<BrowserRouter><div>
    <Route exact path="/" render={() => (<ConnectedLinks />)} />
    {ContentData.map(routifyChapter)}
    {ContentData.map(routifyChapterDevTest)}
</div></BrowserRouter>)
