import React, { useState, useEffect } from "react";
import "./autocomplete.scss";

export interface AutoCompleteProps {
    suggestions: string[];
    idProp?: string;
}
const AutoComplete: React.FC<AutoCompleteProps> = (props: AutoCompleteProps) => {
    const [currVal, setCurrVal] = useState<string>("");
    const [matched, setMatched] = useState<any[]>([]);
    useEffect(() => {
        // TODO: sophisticate search filtering
        const filtered = props.suggestions.filter(suggestion => {
            const reg = new RegExp(currVal, "i");
            return reg.test(suggestion);
        });
        setMatched(filtered);
    }, [currVal]);
    return (
        <div className="autocomplete">
            <input
                type="text"
                id={props.idProp}
                onKeyUp={(e: React.FormEvent<HTMLInputElement>) => {
                    setCurrVal(e.currentTarget.value);
                }}
            />
            {!!matched &&
                !!currVal &&
                matched.map((matchResult, index) => (
                    <div className="suggested" key={index}>
                        {matchResult}
                    </div>
                ))}
        </div>
    );
};

export default AutoComplete;
