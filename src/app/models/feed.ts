export class Feed {

    // tslint:disable-next-line: variable-name
    private _postName: string;
    public get postName(): string {
        return this._postName;
    }
    public set postName(value: string) {
        this._postName = value;
    }

    // tslint:disable-next-line: variable-name
    private _postDate: Date;
    public get postDate(): Date {
        return this._postDate;
    }
    public set postDate(value: Date) {
        this._postDate = value;
    }

    // tslint:disable-next-line: variable-name
    private _postFeed: string;
    public get postFeed(): string {
        return this._postFeed;
    }
    public set postFeed(value: string) {
        this._postFeed = value;
    }

}
