import React from 'react'


type Props = {
    id?: string,
    name: string,
    placeholder?: string,
    type?: string
    value: string,
    errorMessage?: string,
    sendInputValue: (e: React.ChangeEvent) => void


}

export default function SharedTextInput({ id='', name='', placeholder='', value, type='text', errorMessage, sendInputValue }: Props) {
    return (
        <div>
            <input className='outline-input' onChange={sendInputValue} type={type} id={id} name={name} placeholder={placeholder} value={value} />
           <span className='text-error text-sm'>{errorMessage}</span>
        </div>
    )
}
