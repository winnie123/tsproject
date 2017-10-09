

declare var WONDER: IWonder

declare interface IWonder {
    kq: IKq;
    dom: IDom;
    App: App;
    View: React.Component;
    Pages: React.Component;
}

declare interface IKq {
    Env: IEnv;
    api<T>(url: string, args: Array<any>, success: () => {}, fail: () => {}): Promise<T>;
}

declare interface IEnv {
    Weixin: boolean
}

declare interface IDom {
    ajax<T>(args: IAjaxModel<T>): void;
}

declare interface IAjaxModel<T> {
    url: string;
    other: any[];
    success(value?: T | PromiseLike<T>): void;
    fail(reason?: any): void;
}

declare class App<T> extends React.Component {
    constructor(props : React.Props<T>){
        super(props);
    }
}