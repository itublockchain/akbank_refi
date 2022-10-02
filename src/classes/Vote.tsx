export class Vote {
  id: number;
  content: string;
  name: string;
  isVoted: boolean;

  constructor(id: number, name: string, content: string, isVoted: boolean) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.isVoted = isVoted;
  }

  getJSON() {
    return {
      id: this.id,
      name: this.name,
      content: this.content,
    };
  }
}
