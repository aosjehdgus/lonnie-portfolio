import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class ProjectTitleValidationPipe implements PipeTransform {
  readonly TitleOption = ['title1', 'title2'];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    console.log('metadata', metadata);
    if (!this.isTitleValid(value)) {
      throw new BadRequestException(`${value} isn't in the title options`);
    }

    return value;
  }

  private isTitleValid(title: string) {
    const index = this.TitleOption.indexOf(title);
    return index !== -1;
  }
}
