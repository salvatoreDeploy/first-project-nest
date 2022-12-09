import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMember {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'Minimo 5, Maximo 100',
  })
  name: string;
  @IsNotEmpty({
    message: 'A informação de função não pode ser vazia',
  })
  function: string;
}
