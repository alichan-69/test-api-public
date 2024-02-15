export class Validation {
  public isLength(value: string, min: number, max: number) {
    return value.length <= min || value.length >= max
      ? `${min}文字以上${max}文字以下で入力してください`
      : "";
  }
}
