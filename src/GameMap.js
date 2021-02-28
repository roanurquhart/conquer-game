import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hazard from './Hazard.js';
import './App.css';
import Territory from './Territory.js';


function GameMap() {
    const [boardLayout, setBoardLayout] = useState(0);

    function getGameBoard() {
        fetch('/board').then(res => res.json()).then(data => {
          setBoardLayout(data.board);
        });
    }

    function generateGameMap() {
        let row = [];
        console.log(boardLayout);
        for(let i = 0; i < boardLayout.length; i++) {
            row.push(<div key={i} class="row">{ addMapRow(i, boardLayout[i]) }</div>);
        }
        return row;
    }

    function addMapRow(rowNum, columns) {
        let row = [];
        for(let i = 0; i < columns.length; i++) {
            if (columns[i] === 0) {
                row.push(<Hazard></Hazard>);
            } else {
                row.push(<Territory value={columns[i]}></Territory>);
            }
        }
        row.push(<br></br>)
        return row;
    }

    return(
        <div>
            <Button className="btn btn-light" onClick={() => getGameBoard()}>Get Game Map</Button>
            <div class="map">{ generateGameMap() }</div>
        </div>
    );
}

export default GameMap;
