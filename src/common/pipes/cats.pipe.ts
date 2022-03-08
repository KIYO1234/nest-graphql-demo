import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class CatsPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    console.log("🐶 metadata: ", metadata);
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException("Validation失敗");
    }
    return val;
  }
}
