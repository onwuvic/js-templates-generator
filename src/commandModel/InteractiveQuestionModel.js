export const QuestionTypes = Object.freeze({
  input: 'input',
  list: 'list'
});

export class CommandDialog {
  constructor(name, type, message) {
    this.name = name;
    this.type = type;
    this.message = message;
  }
}

export class ListQuestionOption extends CommandDialog {
  constructor(name, message) {
    super(name, QuestionTypes.list, message);
  }
}

export class InputQuestionOption extends CommandDialog {
  constructor(name, message) {
    super(name, QuestionTypes.input, message);
  }
}
