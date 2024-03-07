export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateName(name);
    this.validateLength(length);
    this.validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  validateStudents(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this.validateName(name);
    this._name = name;
  }

  set length(length) {
    this.validateLength(length);
    this._length = length;
  }

  set students(students) {
    this.validateStudents(students);
    this._students = students;
  }
}
