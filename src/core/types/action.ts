import Customer from '../customer';

export interface Action {
  color: string;
  icon: JSX.Element;
  callback?: (customer: Customer) => void;
}
