type defaultProgramType = "bodybuilding" | "strength" | "cardio";

export interface WorkoutProgram {
    type: defaultProgramType;
    name: string;
}
