export default class Currency {
  constructor(code, name) {
    this.validateString(code, 'Code');
    this.validateString(name, 'Name');

    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    this.validateString(name, 'Name');
    this._name = name;
  }

  set code(code) {
    this.validateString(code, 'Code');
    this._code = code;
  }

  validateString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
