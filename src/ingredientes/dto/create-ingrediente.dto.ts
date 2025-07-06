import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreateIngredienteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  precio: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  unidad?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  peso?: number;

  @IsOptional()
  @IsString()
  unidadPeso?: string;
}