import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCUrrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCUrrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
