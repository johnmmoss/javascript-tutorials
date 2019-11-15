export interface ILogRow {

    id:number;
    logged:Date;
    level:number;
    message:string;
    caller:string;
    lineno:number;
}