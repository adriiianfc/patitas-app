export interface Datatable<T>{
    _count:number;
    _pages:number;
    _entries:number;
    _current_page:number;
    _data:T[];

}


export class DatatableImpl<T> implements Datatable<T>{
    public _count:number = 0;
    public _pages:number = 1;
    public _entries:number = 5;
    public _current_page:number = 1;
    public _data:T[] = [];
    constructor(){
        this._count=0;
        this._pages=1;
        this._entries=5;
        this._current_page=1;
        this._data=[];

    }

}

export class DatatableUtils<T>{
    initData(fullData:T[], entries:number):Datatable<T>{
        let newData:T[] = [];
        let data:Datatable<T> = new DatatableImpl;
        if(fullData.length<entries){
            data._current_page = 1;
            data._pages = 1;
            data._entries = entries;
            entries = fullData.length;
            data._count = entries;
            data._data = fullData;

        }else{
            data._current_page = 1;
            data._entries = entries;
            data._count = fullData.length;
            data._pages = fullData.length/entries;
            for(var i:number = 1; i<entries; i++){
                newData.push(fullData[i-1]);
    
            }
            data._data=newData;

        }
        
        return data;

    }


    getData(data:Datatable<T>, fullData:T[]):Datatable<T>{
        let newData:T[] = [];
        let count:number = fullData.length;
        let entries:number = data._entries;
        let init : number = (data._current_page-1) * data._entries;
        let pages = fullData.length/entries;
        let final:number = init+data._entries;
        if(count<entries){
            data._current_page = 1;
            data._pages = 1;
            data._entries = entries;
            data._count = count;
            data._data = fullData;

        }else{
            if(count<final){
                final = count;
            }
            data._entries = entries;
            data._count = count;
            data._pages = pages;
            for(var i:number = init; i<final; i++){
                newData.push(fullData[i]);
    
            }
            data._data=newData;

        }
        
        return data;


    }
}