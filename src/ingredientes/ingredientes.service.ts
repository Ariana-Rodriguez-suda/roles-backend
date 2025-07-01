import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredienteRepository: Repository<Ingrediente>,
  ) {}

  create(dto: CreateIngredienteDto) {
    const nuevo = this.ingredienteRepository.create(dto);
    return this.ingredienteRepository.save(nuevo);
  }

  @Get()
  findAll() {
    return this.ingredienteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingrediente`;
  }

  async update(id: number, dto: UpdateIngredienteDto) {
    await this.ingredienteRepository.update(id, dto);
    return this.ingredienteRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.ingredienteRepository.delete(id);
  }
}
