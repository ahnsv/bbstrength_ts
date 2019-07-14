import * as React from "react";
import * as ReactDOM from "react-dom";
import Journal from "./view/journal";
import { WorkoutDay } from "./model/workout";
import { WorkoutProgram } from "./model/program";

const Home: React.FunctionComponent = () => {
    const today: WorkoutDay = {
        date: new Date(),
        focus: "BICEPS",
    };
    const dailyProgram: WorkoutProgram = {
        type: "bodybuilding",
        name: "10X10",
    };
    return (
        <div className={`home`}>
            <Journal day={today} program={dailyProgram} />
        </div>
    );
};

ReactDOM.render(<Home />, document.getElementById("app"));
