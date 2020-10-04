import React from 'react';
import { BarSketch } from "../sketches/BarSketch";

import "./SketchComponent.css"

export class SortingSketchComponent extends React.Component {
    componentDidMount() {
        new BarSketch("sketch1", "mergeSort");
    }

    render() {
        return (
            <div className="sketch" id="sketch1"/>
        )
    }
}