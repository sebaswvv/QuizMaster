// create class Quiz with, id, name, userId, public and questions
import { Question } from './question';
export class Quiz {
    id: undefined;
    name: string;
    userId: number;
    isPublic: boolean;
    questions: Question[];

    constructor(name: string, userId: number, isPublic: boolean, questions: Question[], id?: undefined) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.isPublic = isPublic;
        this.questions = questions;
    }
}
