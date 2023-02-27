// create class Quiz with, id, name, userId, public and questions
import { Question } from './question';
export class Quiz {
    id: number;
    name: string;
    userId: number;
    isPublic: boolean;
    questions: Question[];

    constructor(id: number, name: string, userId: number, isPublic: boolean, questions: Question[]) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.isPublic = isPublic;
        this.questions = questions;
    }
}
