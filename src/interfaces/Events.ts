export interface Events {
    id: number,
    title: string;
    start: Date;
    end: Date;
    notes: string;
    user: {
        id: number;
        name: string;
    }
}
