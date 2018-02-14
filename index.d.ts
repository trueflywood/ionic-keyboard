
export type keyboardEventType = 'keyboardDidHide' | 'keyboardDidShow' | 'keyboardWillShow'| 'keyboardWillHide'

interface IKeyboard {
    isVisible: boolean;
    show();
    hide();
    hideFormAccessoryBar(show: boolean, listener?: (currentValue: string) => any )
}

interface Window {
    Keyboard: IKeyboard;
    addEventListener(type: keyboardEventType, listener: (ev: Event) => any): void;
    removeEventListener(type: keyboardEventType, listener: (ev: Event) => any): void;
}

declare var Keyboard: IKeyboard;