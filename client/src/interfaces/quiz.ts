// new quiz interface
export interface Quiz {
    id: number;
    userId: number;
    name: string;
    public: boolean;
    questions: [];
}