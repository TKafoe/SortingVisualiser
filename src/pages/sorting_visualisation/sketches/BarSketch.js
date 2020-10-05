import p5 from 'p5';
import { MergeSort } from '../sorting_algorithms/MergeSort';
import {InsertionSort} from "../sorting_algorithms/InsertionSort";

export class BarSketch {
    constructor(id, sortingAlgorithm) {
        const barsShuffled = shuffle(Array.from(Array(100).keys()));
        const strategy = getSortingAlgorithm(sortingAlgorithm);
        const steps = strategy.sort(barsShuffled);
        let i = 0;
        let bars = steps[i];

        new p5(p => {
            p.setup = () => {
                p.createCanvas(1600, 400);
                this.startTime = p.millis();
            }

            p.draw = () => {
                bars = steps[i];
                const barSize = p.height / (bars.length + 10);
                if (p.millis() - this.startTime > 50 && i < steps.length - 1) {
                    this.startTime = p.millis();
                    i++;
                }

                if (i === steps.length - 1 && p.millis() - this.startTime < 1500) {
                    p.fill(0, 255, 0)
                } else if (i === steps.length - 1 && p.millis() - this.startTime >= 1500) {
                    this.startTime = p.millis();
                    i = 0;
                } else {
                    p.fill(255);
                }

                p.background(55);
                bars.forEach((bar, index) => {
                    const height = bar * barSize;
                    const widthBarSpace = p.width / bars.length;

                    p.rect(index * widthBarSpace, 390 - height, widthBarSpace, height);
                })
            }
        }, id);
    }
}

const getSortingAlgorithm = (sortingAlgorithm) => {
    switch(sortingAlgorithm) {
        case "mergeSort": {
            return new MergeSort();
        }
        case "insertionSort": {
            return new InsertionSort();
        }
        default: {
            return null;
        }
    }
}

const shuffle = (bars) => {
    let currentIndex = bars.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = bars[currentIndex];
        bars[currentIndex] = bars[randomIndex];
        bars[randomIndex] = temporaryValue;
    }
    return bars;
}