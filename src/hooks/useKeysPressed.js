import useEventListener from "./useEventListener"

export default function useKeysPressed(callback){
    const digits = ['0','1','2','3','4','5','6','7','8','9','.']
    const operators = ['+', '-', '*', '/', 'Enter', 'Delete', 'Backspace']

    useEventListener(
        'keyup',
        (e) => {
            e.preventDefault()
            if(digits.includes(e.key) || operators.includes(e.key))
                callback(e.key)   
        },
        document
    )
}