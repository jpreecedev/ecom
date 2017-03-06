export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    (state: T, action: Action): T;
}

export interface ListenerCallback {
    (): void;
}

export interface UnsubscribeCallback {
    (): void;
}

export class Store<T> {
    private _state: T;
    private _listeners: ListenerCallback[] = [];

    constructor(private reducer: Reducer<T>, initialState: T) {
        this._state = initialState;
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach((listener: ListenerCallback) => listener());
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }

}

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };
let plusSevenAction: Action = { type: 'PLUS', payload: 7 };

let reducer: Reducer<number> = (state: number, action: Action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
            return state + action.payload;
        default:
            return state;
    }

};

let store = new Store<number>(reducer, 0);
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log('subscribed: ', store.getState());
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);

unsubscribe();

store.dispatch(decrementAction);

console.log(store.getState());
