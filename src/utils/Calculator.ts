export enum CALCULATOR_ACTIONS{
    ADD_DIGIT = 'add-digit',
    REMOVE_DIGIT = 'remove-digit',
    CLEAR_ALL = 'clear-all',
    ADD_OPERATOR = 'add-operator',
    CALCULATE =  'calculate'
}

export enum CALCULATOR_OPERATORS{
    ADDITION= '+',
    SUBSTRACTION='-',
    MULTIPLICATION='x',
    DIVISION='÷'
}

export const INPUT_MAX_DIGITS = 15


/**
 * Format an input to have a space character between every 3 digits in the integer part
 * @param input any input from the calculator
 * @returns string
 */
export function formatInput(input: any): string{
    if(!input) return ''
    if(!input.includes('.')) return new Intl.NumberFormat('fr-FR', {maximumFractionDigits: 0}).format(input)

    const [int, decimal] = input.split('.')
    let formattedInt = new Intl.NumberFormat('fr-FR', {maximumFractionDigits: 0}).format(int)
    return decimal ? `${formattedInt}.${decimal}` : `${formattedInt}.`
}

/**
 * Get rid of all the '0' characters in the decimal part that are not useful
 * If the decimal part is only '0' characters, the function returns the integer part only
 * @param value is an input having a decimal part
 * @returns string
 */
export function trimDecimalZeros(value: string){
    if(!value.includes('.')) return value

    let [int, decimal] = value.split('.')
    
    let i = decimal.length
    let lastDigit

    do{
        lastDigit = decimal[i - 1]
        i--
    }while( lastDigit === '0' && i > 0)

    decimal = decimal.slice(0, i + 1)

    return decimal.length > 0
        ? `${int}.${decimal}`
        : int
}

export function calculate({previousInput, currentInput, operator}: any){
    const left = parseFloat(previousInput)
    const right = parseFloat(currentInput)

    if(isNaN(left) || isNaN(right)) return ''

    let result: string | number = '' 
    switch(operator){
        case CALCULATOR_OPERATORS.ADDITION:
            result = left + right
            break
        case CALCULATOR_OPERATORS.SUBSTRACTION: 
            result = left - right
            break
        case CALCULATOR_OPERATORS.MULTIPLICATION:
            result = left * right
            break
        case CALCULATOR_OPERATORS.DIVISION:
            result = left / right
            break
        default:
            break
    }

    result = result.toString()

    if(result.length <= INPUT_MAX_DIGITS || !result.includes('.')) return result

    result = parseFloat(result).toFixed(3)
    return trimDecimalZeros(result.toString())
}