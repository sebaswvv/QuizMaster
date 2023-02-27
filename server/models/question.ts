// class for Question with text, image, timeToAnswer, options
import { Option } from './option';
export class Question {
    text: string;
    image: string;
    timeToAnswer: number;
    options: Option[];

    constructor(text: string, image: string, timeToAnswer: number, options: Option[]) {
        this.text = text;
        this.image = image;
        this.timeToAnswer = timeToAnswer;
        this.options = options;
    }
}

