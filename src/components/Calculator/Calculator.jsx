import React, { useState, memo } from 'react'
import styled from 'styled-components'

const CalculatorBase = styled.form`
    padding: 15px;
    width:max-content;
    max-width: 550px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.calculatorBase};
    box-shadow: ${({ theme }) => theme.boxShadowBase};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
`
const CalculatorScreen = styled.input`
    width: 100%;
    height: 70px;
    padding: 15px;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 1.2rem;
    text-align: right;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.calculatorScreen};
    &::placeholder{
        color: white;
    }
`
const CalculatorBody = styled.div`
    padding: 0px 0px;
    height: 100%;
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:10px;
   
`
const CalculatorButton = styled.input`
    height: 50px;
    width: 60px;
    padding: 10px 20px;
    color: ${({ caracterColor }) => caracterColor || "white"};
    font-weight: 600;
    background-color: ${({ theme }) => theme.calculatorButtons};
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    transition: ${({ theme }) => theme.transition};
    &:hover{
        background-color: ${({ theme }) => `${theme.calculatorButtons}70`};
    }
    &.special-button{
        background-color: ${({ theme }) => theme.specialButton};
    }
    &.special-caracter{
        color: ${({ theme }) => theme.caracterColor};
    }
`
export const Calculator = memo(() => {
    const [numOne, setNumOne] = useState(0)
    const [numOld, setNumOld] = useState(0)
    const [result, setResult] = useState()
    const [selectedOperator, setSelecterOperator] = useState()
    const operator = {
        add: (a, b) => {
            return parseFloat(a) + parseFloat(b)
        },
        subtract: (a, b) => {
            return parseFloat(a) - parseFloat(b)
        },
        multiplication: (a, b) => {
            return parseFloat(a) * parseFloat(b)
        },
        division: (a, b) => {
            return parseFloat(a) / parseFloat(b)
        },
        percentage: (a, b) => {
            return parseFloat(a) / parseFloat(b)
        }
    }
    const handleNumber = ({ target }) => {
        let numberInput = target.value
        if (numOne === 0) {
            setNumOne(numberInput)
        } else {
            setNumOne(numOne + numberInput)
        }
    }
    const calculate = () => {
        if (selectedOperator === "+") {
            setNumOne(operator["add"](numOld, numOne))
        } else if (selectedOperator === "-") {
            setNumOne(operator["subtract"](numOld, numOne))
        } else if (selectedOperator === "*") {
            setNumOne(operator["multiplication"](numOld, numOne))
        } else if (selectedOperator === "/") {
            setNumOne(operator["division"](numOld, numOne))
        }
        else if (selectedOperator === "%") {
            setNumOne(operator["percentage"](numOld, numOne))
        }
    }
    const handleOperatorInput = ({ target }) => {
        setSelecterOperator(target.value)
        setNumOld(numOne)
        setNumOne(0)
    }
    const clear = () => {
        setNumOne(0)
        setNumOld(0)
    }
    const deleted = () => {
        let sliceNumbers = numOne.toString()
        if (sliceNumbers.length >= 1) {
            sliceNumbers = sliceNumbers.slice(0, -1)
            let slicedNumbers = sliceNumbers.length >= 1 ? sliceNumbers : 0
            setNumOne(parseInt(slicedNumbers))
        }
    }
    console.log(numOld)
    return (
        <CalculatorBase className='calculator' >
           { numOne || numOld !== 0 ? <h2>{numOne} {selectedOperator} {numOld}</h2> :null}
            <CalculatorScreen readOnly value={numOne} />
            <CalculatorBody className='calculator__body'>
                <CalculatorButton type="button" value={7} onClick={handleNumber} />
                <CalculatorButton type="button" value={8} onClick={handleNumber} />
                <CalculatorButton type="button" value={9} onClick={handleNumber} />
                <CalculatorButton type="button" value={"*"} className="special-caracter" name="multiplication" caracterColor="#0ea5e9" onClick={handleOperatorInput} />
                <CalculatorButton type="button" value={4} onClick={handleNumber} />
                <CalculatorButton type="button" value={5} onClick={handleNumber} />
                <CalculatorButton type="button" value={6} onClick={handleNumber} />
                <CalculatorButton type="button" value={"-"} className="special-caracter" name="resta" caracterColor="#0ea5e9" onClick={handleOperatorInput} />
                <CalculatorButton type="button" value={1} onClick={handleNumber} />
                <CalculatorButton type="button" value={2} onClick={handleNumber} />
                <CalculatorButton type="button" value={3} onClick={handleNumber} />
                <CalculatorButton type="button" value={"+"} className="special-caracter" name="suma" caracterColor="#0ea5e9" onClick={handleOperatorInput} />
                <CalculatorButton type="button" value={"/"} className="special-caracter" name="division" caracterColor="#0ea5e9" onClick={handleOperatorInput} />
                <CalculatorButton type="button" value={"%"} className="special-caracter" name="percentage" caracterColor="#0ea5e9" onClick={handleOperatorInput} />
                <CalculatorButton type="button" value={0} onClick={handleNumber} />
                <CalculatorButton type="button" value={"."} className="special-caracter" caracterColor="#0ea5e9" onClick={handleNumber} />
                <CalculatorButton type="button" value={"CE"} className="special-caracter" caracterColor="#0ea5e9" onClick={clear} />
                <CalculatorButton type="button" value={"del"} className="special-caracter" onClick={deleted} />
                <CalculatorButton type="button" className='special-button' name="equal" value={"="} onClick={calculate} />
            </CalculatorBody>
        </CalculatorBase>
    )
})
