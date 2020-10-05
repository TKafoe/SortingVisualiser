import React from 'react';
import { BarSketch } from "../sketches/BarSketch";

import "./SketchComponent.css"

export class SortingSketchComponent extends React.Component {
    componentDidMount() {
        new BarSketch(`${this.props.strategy}-sketch`, this.props.strategy);
    }

    render() {
        return (
            <div className="sketch" id={`${this.props.strategy}-sketch`} />
        )
    }
}