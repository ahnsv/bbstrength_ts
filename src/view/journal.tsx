import React, { useState } from "react";
import { WorkoutDay } from "../model/workout";
import { WorkoutProgram } from "../model/program";
import AutoComplete from "../components/autocomplete";
/**
 * @name journal.tsx
 * @description keep daily journal
 *
 **/
interface JournalProps {
    day: WorkoutDay;
    program: WorkoutProgram;
}

export default function Journal(props: JournalProps) {
    const [completed, setCompleted] = useState([]);
    const handleJournalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if user hits "벤치", "스쿼트", "데드", we need to map this to our default exec
        // and also makes autocomplete happen
    };
    return (
        <div className={`journal`}>
            <div className="journal-title">
                <h1>오늘의 운동</h1>
                <h5>오늘 한 운동의 종목과 세트별 횟수를 기록해주세요</h5>
            </div>
            <div className="journal-content">
                <AutoComplete suggestions={["벤치프레스", "스쿼트", "데드리프트"]} idProp={`journal`} />
            </div>
        </div>
    );
}
