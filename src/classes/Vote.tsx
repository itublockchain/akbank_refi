export class Vote {
  content: string;
  name: string;

  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
  }

  getJSON() {
    return {
      name: this.name,
      content: this.content,
    };
  }
}
