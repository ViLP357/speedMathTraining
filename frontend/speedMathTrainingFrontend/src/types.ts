export interface Question {
  val1: number;
  val2: number;
  operator: string;
}

export type Operators = {
  addition: boolean;
  subtraction: boolean;
  multiplication: boolean;
};

export type QuestionAreaProps = {
  acceptedOperators: Operators;
};