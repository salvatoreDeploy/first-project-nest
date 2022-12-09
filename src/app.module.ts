import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MemberTeamRepository } from './repositories/memberTeamRepository';
import { PrismaMemberTeamRepository } from './repositories/prisma/prismaMemberTeamRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    { provide: MemberTeamRepository, useClass: PrismaMemberTeamRepository },
  ],
})
export class AppModule {}
