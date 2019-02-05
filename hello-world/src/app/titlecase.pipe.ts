import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(title: string): any {
    if (title) {
      return this.convertToTitleCase(this.removeSuroundingSpaces(title));
    }
    return null;
  }

  private removeSuroundingSpaces(str: string) {
    if (str) {
      return str.trim().split(' ');
    }
    return str;
  }

  private convertToTitleCase(title: string[] | string) {
    const newTitle: string[] = [];
    // First word always capital - even disposition
    newTitle.push(this.toUpperFirst(title[0]));
    for (let i = 1; i < title.length; i ++) {
      if (this.isPreposition(title[i])) {
        newTitle.push(title[i].toLowerCase());
      } else {
        newTitle.push(this.toUpperFirst(title[i]));
      }
    }
    return newTitle.join(' ');
  }

  private toUpperFirst(word: string) {
    if (word.length > 1) {
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    } else {
      return word[0].toUpperCase();
    }
  }

  private isPreposition(word: string) {
    const preposition = ['of', 'a', 'the'];
    if (preposition.includes(word.toLowerCase())) {
      return true;
    }
    return false;
  }
}
