import React, { useState, useRef, ChangeEvent } from "react";
import './Input.styles';

interface Props {
    labelName: string,
    value: string,
    onChange(event: ChangeEvent<HTMLInputElement>): void
}

export const Input = ({ labelName, value, onChange }: Props) => {

    return (
        <label>{labelName}
            <input
                value={value}
                onChange={onChange}
            />
        </label>
    )
}