import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMember } from './dtos/createTeamMember';
import { MemberTeamRepository } from './repositories/memberTeamRepository';

@Controller()
export class AppController {
  constructor(private teamMemberRepository: MemberTeamRepository) {}

  @Post()
  async getHello(@Body() body: CreateTeamMember) {
    const { name, function: memberFunction } = body;

    await this.teamMemberRepository.create(name, memberFunction);

    /* const member = await this.prisma.timeMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    }); */
  }
}
