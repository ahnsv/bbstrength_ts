type DefaultFocus = "CHEST" | "LEG" | "BACK" | "BICEPS" | "TRICEPS" | "SHOULDERS";

export interface WorkoutDay {
    date: Date;
    focus?: DefaultFocus;
}
