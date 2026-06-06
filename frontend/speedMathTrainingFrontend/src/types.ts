export interface Question {
  val1: number;
  val2: number;
  operator: string;
}

export type OperatorsStates = {
  addition: boolean;
  subtraction: boolean;
  multiplication: boolean;
};

export type QuestionAreaProps = {
  acceptedOperators: OperatorsStates;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>
  digits: number[]
  numberOfQuestions: number
};

export type TimerProps = {
  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
}

export type Operator = "+" | "-" | "*";