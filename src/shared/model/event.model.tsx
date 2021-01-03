export interface EventModel{
    title:string;
    eventList:EventListModel[];
    key:string;
}
export interface EventListModel{
    key:string;
    img:string;
    price:number;
    sale:number;
    description:string;
    title:string;
    category:string;
    id:string;
}