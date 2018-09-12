import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import heart from './heart.png'
import gameOver from './gameover.png'
let mid = (a, b) => {
  let ret = (a - b) / 2
  if (ret < 0) ret = -ret
  return ret;
}




let makeVerticalArrow = (x1, y1, x2, y2) => {
  let midX = x1 + mid(x1, x2)
  let midY = y1 + mid(y1, y2)
  let d1 = ["M", x1, y1, "Q", midX + 50, midY, x2, y2].join(" ");
  return (<svg style={{ "position": "absolute", "left": "632.65px", "top": "172.25px" }} pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml" class="_jsPlumb_connector ">
    <path d={d1} pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" fill="none" stroke="#005583" stroke-width="1">
    </path>
    <path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.35,17.75 L110.69180447231714,13.39462870135657 L114.87078706885129,17.272270311648164 L110.08378486896025,20.368172431909475 L120.35,17.75" class="" stroke="#005583" fill="#005583">
    </path>
  </svg>)

}


let makeVerticalArrowText = (x1, y1, x2, y2) => {
  let sy = window.scrollY
  let sx = window.scrollX
  y1 = y1 + sy
  y2 = y2 + sy
  x1 = x1 + sx
  x2 = x2 + sx
  let offsetX = Math.min(x1, x2)
  let offsetY = Math.min(y1, y2)

  x1 = x1 - offsetX
  y1 = y1 - offsetY
  x2 = x2 - offsetX
  y2 = y2 - offsetY

  let midx = (x1 + x2) / 2
  let midy = (y1 + y2) / 2
  let width = x2 - x1
  let height = y2 - y1
  if (width < 0) width = -width
  if (height < 0) height = -height
  width += 20

  let d1 = ["M", x1, y1, "L", midx + 50, midy, x2, y2].join(" ");
  return `<svg style="position:absolute; left:${offsetX};top:${offsetY}" width=${width + 50} height=${height} pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml" class="_jsPlumb_connector ">
    <path d="${d1}" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" fill="none" stroke="#005583" stroke-width="1">
    </path>
   
    </path>
  </svg>`

}


let makeHorizontalArrowText = (x1, y1, x2, y2) => {
  let sy = window.scrollY
  let sx = window.scrollX
  y1 = y1 + sy
  y2 = y2 + sy
  x1 = x1 + sx
  x2 = x2 + sx
  let offsetX = Math.min(x1, x2)
  let offsetY = Math.min(y1, y2) - 5
  x1 = x1 - offsetX
  y1 = y1 - offsetY
  x2 = x2 - offsetX
  y2 = y2 - offsetY
  let width = x2 - x1
  let height = y2 - y1
  if (width < 0) width = -width
  if (height < 0) height = -height
  height = height + 40
  height = Math.max(20, height)
  width = Math.max(20, width)
  let d1 = ["M", x1, y1, "L", x2, y2].join(" ");
  return `<svg style="position:absolute; left:${offsetX};top:${offsetY}" width=${width} height=${height} pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml" class="_jsPlumb_connector ">
    <path d="${d1}" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" fill="none" stroke="#005583" stroke-width="1">
    </path>
   
    </path>
  </svg>`

}

function range(start, stop, step) {
  if (typeof stop === 'undefined') {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step === 'undefined') {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};

class BareMain extends Component {
  componentWillUnmount() {
    console.log("****UNMOUNTING*****")
    //document.removeEventListener('keydown', this.keydownHandler);
  }
  componentDidMount() {
    if (this.props.devtest) {
      this.props.dispatch({ type: 'devtest' })
    }

    this.props.dispatch({ type: 'reset', chapter: this.props.chapter, exerciseNumber: this.props.exerciseNumber, content: this.props.solution })


    this.drawArrows()

    let keydownHandler = (e) => {

      e = e || window.event;
      let disp = t => this.props.dispatch({ type: t })
      if (e.keyCode === 27) {
        // escape

        disp("escape")
        e.preventDefault();
        return;
      }
      if (e.keyCode === 38) {
        // up arrow

        disp("upkey")
        e.preventDefault();
        return;
      }
      if (e.keyCode === 40) {
        // down arrow
        disp("downkey")
        e.preventDefault();
        return;
      }
      if (e.keyCode === 37) {
        // left arrow
        disp("leftkey")
        e.preventDefault();
        return;

      }
      if (e.keyCode === 39) {
        // right arrow
        disp("rightkey")
        e.preventDefault();
        return;

      }
      if (e.keyCode === 13) {
        // enter key
        if (this.props.addRowBoxSelectMode) {
          let left = window.prompt('Enter a name')
          if (left === null) {
            disp('escape')
            return;
          }
          this.props.dispatch({ type: 'addrowinput', left: left })
          e.preventDefault();
          return;

        }
        if (this.props.placeValueSelectBox) {
          disp("placeValueSelectBoxDone")
          return
        } if (this.props.placeValueSelectRow) {
          let primitive = window.prompt('primitive value')
          if (primitive === null) {
            disp('escape')
            return;
          }
          this.props.dispatch({ type: 'placeValueSelectRowDone', value: primitive })
          return
        }
        if (this.props.addReferenceSelectOriginBox) {
          disp("addReferenceSelectOriginBoxDone")
          return;
        }
        if (this.props.addReferenceSelectOriginRow) {
          disp("addReferenceSelectOriginRowDone");
          return;

        }
        if (this.props.addReferenceSelectDestinationBox) {
          disp("addReferenceSelectDestinationBoxDone");
          return;
        }

      }
      let letter = String.fromCharCode(e.keyCode);
      switch (letter) {

        case 'A':
          disp('addrow')
          return;
        case 'O':
          disp('addobject')
          return;
        case 'N':
          disp('addframe')
          return;
        case 'R':
          disp('addReferenceInit')
          return;
        case 'I':
          disp('placeValueInit')
          return;
        case 'C':
          let cn = window.prompt("which line number?")
          if (cn === null) return
          this.props.dispatch({ type: 'pushcallstack', number: parseInt(cn) })
          return;
        case 'N':
          disp('addframe')
          return;
        case 'P':
          disp('popcallstack')
          return;
        case 'D':
          disp('destroyframe')
          return;
        case 'F':
          let n = window.prompt("which line number?")
          if (n === null) return
          this.props.dispatch({ type: 'addfunction', lineNumber: parseInt(n) })
          return;
      }
      console.log(letter);
    }

    this.props.dispatch({ type: 'keydownHandler', keydownHandler: keydownHandler })

  }

  calcLives = () => {
    let numLives = 3
    let currentTime = new Date() / 1
    let mistakes = this.props.mistakes
    mistakes.forEach(mistake => {
      if (currentTime - mistake.timestamp < 1000 * 60 * 5) {
        numLives--;
      }
    })
    return numLives
  }
  dead = () => {
    return this.calcLives() < 1
  }
  nextLife = () => {
    let currentTime = new Date() / 1
    let mistakes = this.props.mistakes
    let possibilities = []
    mistakes.forEach(mistake => {
      if (currentTime - mistake.timestamp < 1000 * 60 * 5) {
        possibilities.push(1000 * 60 * 5 - (currentTime - mistake.timestamp) )
      }
    })
    let ret = Math.min.apply(Math, possibilities);
    ret = ret / 1000
    ret = Math.floor(ret)
    if (ret > 60) {
      return "" + Math.floor(ret / 60) + " minutes and " + (ret % 60) + " seconds"
    }
    return "" + ret + " seconds";
  }
  render() {
    if (this.dead()) return (<div>
      <div style={{ textAlign: "center" }}><img src={gameOver} /></div>
      You exhausted all your lives. You have to wait {this.nextLife()}
      <p>Here are some tips:
       <ul>
          <li> You should NEVER be guessing. If you don't know what action to take, go find out. Rewatch the video. Ask a teacher or a friend.</li>
          <li> Maybe you're tired. Go take a walk, let the blood circulate. </li>
          <li>If it's late at night, get off the computer and get some sleep.</li>
        </ul>
      Why is guessing a bad idea? Guessing is a wasted opportunity to learn something you didn't know.
      </p>
    </div>)
    if (!this.props.uid) {
      return "A popup should be appearing to invite you to login with google"
    }
    let referenceMap = { left: {}, right: {} }

    this.props.references.forEach(ref => {
      if (ref.type !== 'primitive') return
      if (!referenceMap[ref.column][ref.boxNumber])
        referenceMap[ref.column][ref.boxNumber] = {}
      if (!referenceMap[ref.column][ref.boxNumber][ref.row])
        referenceMap[ref.column][ref.boxNumber][ref.row] = {}
      referenceMap[ref.column][ref.boxNumber][ref.row] = ref.primitive
    })

    let getPrimitive = (col, bn, rn) => {
      if (referenceMap[col] !== undefined &&
        referenceMap[col][bn] !== undefined &&
        referenceMap[col][bn][rn] !== undefined) {
        return referenceMap[col][bn][rn]
      }
    }

    let rowMap = { left: {}, right: {} }

    this.props.rows.forEach(row => {
      if (!rowMap[row.boxColumn][row.boxNumber])
        rowMap[row.boxColumn][row.boxNumber] = []
      rowMap[row.boxColumn][row.boxNumber].push({ name: row.name })
    })

    function isBoxHighlighted(col, i) {
      //if(!this.props.addRowBoxSelectMode || !this.props.columnSelected || !this.props.boxNumber) return false
      let boxHighlightMode = this.props.placeValueSelectBox || this.props.addRowBoxSelectMode || this.props.addReferenceSelectOriginBox || this.props.addReferenceSelectDestinationBox
      return boxHighlightMode && this.props.columnSelected === col && this.props.boxNumber === i
    }

    function isRowHighlighted(col, boxNumber, rowIndex) {
      let rowHighlightMode = this.props.placeValueSelectRow || this.props.addReferenceSelectOriginRow || this.props.addReferenceSelectDestinationRow
      return rowHighlightMode && this.props.columnSelected === col && this.props.boxNumber === boxNumber && this.props.rowNumber === rowIndex
    }

    isBoxHighlighted = isBoxHighlighted.bind(this)
    isRowHighlighted = isRowHighlighted.bind(this)

    let renderFunction = (i, lineNumber) =>
      (<tr><td style={{ 'margin': "10px" }}> function at line {lineNumber}</td></tr>)

    let renderRegularObject = i =>
      !rowMap["right"][i] ? (<tr><td>&nbsp;</td></tr>) : rowMap["right"][i].map((row, rind) =>
        (<tr>
          <td>{row.name}</td>
          <td
            id={"right " + i + " " + rind}
            style={{
              backgroundColor: isRowHighlighted("right", i, rind) ? "#eee" : null
            }}>
            {getPrimitive("right", i, rind)}
          </td>
        </tr>))


    let renderedObjects = this.props.objects.map((obj, i) =>
      (<table
        id={"right " + i}
        style={{
          backgroundColor: isBoxHighlighted("right", i) ? "#eee" : null
        }}><tbody>
          {
            obj.type === 'regular' ? renderRegularObject(i) : renderFunction(i, obj.lineNumber)
          }
        </tbody>
      </table>))
    let spl = this.props.src.trim().split('\n')
    return (
      <div className="App">
        <div> {range(0, this.calcLives()).map(x => (<img height="15px" src={heart} />))}</div>
        <div style={{ display: 'flex' }}>
          <div>
            <div style={{ display: 'flex', marginRight: "30px" }}>
              <pre style={{ "paddingRight": "10px", "marginLeft": "5px" }}><code>{range(1, spl.length + 1).join('\n')}</code></pre>
              <pre><code>{this.props.src}</code></pre>

              <div>

              </div>

            </div>
            <div className="keybindings">
              <div> (A)dd a row </div>
              <div> Place a pr(I)mitive </div>
              <div> Place an (R)eference </div>
              <div> Create an (O)bject </div>
              <div> Create a (F)unction </div>
              <div> Create (N)ew frame </div>
              <div> Push to (C)allstack </div>
              <div> (D)estroy a frame </div>
              <div> (P)op from callstack </div>
            </div>
          </div>

          <div style={{ marginRight: "50px" }}>
            {range(0, this.props.numFrames).map((i) =>
              this.props ? (<table
                id={"left " + i}
                style={{
                  //height: "100px",
                  // minWidth: "100px",
                  // marginTop: "15px",
                  backgroundColor: isBoxHighlighted("left", i) ? "#eee" : "#fff"
                }}>
                <tbody>
                  {!rowMap["left"][i] ? (<tr><td>&nbsp;</td></tr>) : rowMap["left"][i].map((row, rind) =>
                    <tr>
                      {/* style={{
                      border: isRowHighlighted("left", i, rind) ? "1px solid red" : "1px solid black"
                    }} */}

                      <td>
                        {row.name}
                      </td>
                      <td id={"left " + i + " " + rind}
                        style={{
                          //minWidth: "30px",
                          //marginLeft: "30px",
                          backgroundColor: isRowHighlighted("left", i, rind) ? "#eee" : null
                        }}>
                        {getPrimitive("left", i, rind)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>) : null)}
          </div>
          <div style={{ marginRight: "30px" }}>
            {renderedObjects}

          </div>
          <div style={{ marginRight: "50px" }}>
            {/* <p>
              line number: {this.props.currentLine}
            </p> */}
            <div className="innerCallStack flex-container">
              <span className="callStackTitle">call stack</span>
              <table>
                <tbody>
                  {this.props.callstack.slice().reverse().map(i => (<tr><td> <span className="callitem">{i}</span></td> </tr>))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
        <div id="arrows"></div>

      </div>
    );
  }


  drawHorizontalArrow = (arrowsElement, aRect, bRect) => {
    let elem = document.createElement("div");
    let x1 = (aRect.left + aRect.right) / 2
    let y1 = (aRect.top + aRect.bottom) / 2
    let x2 = bRect.left
    let y2 = bRect.top
    let toadd = makeHorizontalArrowText(x1, y1, x2, y2);
    elem.innerHTML = toadd
    arrowsElement.appendChild(elem);
  }
  drawVerticalArrow = (arrowsElement, aRect, bRect) => {
    let elem = document.createElement("div");
    let x1 = (aRect.left + aRect.right) / 2
    let y1 = (aRect.top + aRect.bottom) / 2
    let x2 = bRect.right
    let y2 = bRect.top
    let toadd = makeVerticalArrowText(x1, y1, x2, y2);
    elem.innerHTML = toadd
    arrowsElement.appendChild(elem);
  }
  drawArrows = () => {
    let arrowsElement = document.getElementById("arrows");
    if (!arrowsElement) return;
    arrowsElement.innerHTML = "";
    for (var i = 0; i < this.props.references.length; i++) {
      let r = this.props.references[i]
      if (r.type !== 'reference') continue
      let oid = r.originCol + " " + r.originBox + " " + r.originRow
      let did = r.destinationCol + " " + r.destinationBox
      let aElem = document.getElementById(oid);
      let bElem = document.getElementById(did);
      let aRect = aElem.getBoundingClientRect();
      let bRect = bElem.getBoundingClientRect();
      if (r.originCol === "right" && r.destinationCol === "right") {
        this.drawVerticalArrow(arrowsElement, aRect, bRect)
      } else {
        this.drawHorizontalArrow(arrowsElement, aRect, bRect)
      }
      //console.log(rect.top, rect.right, rect.bottom, rect.left);
    }

  }

  updateScroll = () => {
    let elem = document.getElementById("" + this.props.selected);
    let rect = elem.getBoundingClientRect();
    if (rect.top < 0) {
      window.scrollTo(0, Math.max(0, window.scrollY + rect.top - 10));
    }
    if (rect.bottom > window.innerHeight) {
      window.scrollTo(0, Math.max(0, window.scrollY + (rect.bottom - window.innerHeight) + 10));
    }
  }
  // componentDidMount = () => {

  // }

  componentDidUpdate = () => {
    if (!this.dead()) this.drawArrows()
    // this.updateScroll()
  }
}

let mapStateToProps = s => ({
  uid: s.uid,
  numFrames: s.numFrames,
  objects: s.objects,
  addRowBoxSelectMode: s.addRowBoxSelectMode,
  columnSelected: s.columnSelected,
  boxNumber: s.boxNumber,
  rows: s.rows,
  addReferenceSelectOriginBox: s.addReferenceSelectOriginBox,
  addReferenceSelectOriginRow: s.addReferenceSelectOriginRow,
  addReferenceSelectDestinationBox: s.addReferenceSelectDestinationBox,
  placeValueSelectBox: s.placeValueSelectBox,
  placeValueSelectRow: s.placeValueSelectRow,
  rowNumber: s.rowNumber,
  references: s.references,
  callstack: s.callstack,
  currentLine: s.currentLine,
  mistakes: s.mistakes
})

let Main = connect(mapStateToProps)(BareMain)
//

export default Main;
