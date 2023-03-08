// class for Question with text, image, timeToAnswer, options
import { Option } from './option';
export class Question {
    text: string;
    image: any;
    timeToAnswer: any;
    options: Option[];

    constructor(text: string, image: any, timeToAnswer: any, options: Option[]) {
        this.text = text;
        this.image = image;
        this.timeToAnswer = timeToAnswer;
        this.options = options;
    }
}

