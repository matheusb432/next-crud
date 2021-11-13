export default class Customer {
  private _id?: string;
  private _name: string;
  private _age: number;

  constructor(name: string, age: number, id?: string) {
    this._id = id;
    this._name = name;
    this._age = age;
  }

  static empty = () => new Customer('', 0);

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}
