import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaQuestionsRepository } from '@/infra/database/prisma/repositories/prisma-questions-repository';
import { PrismaAnswerRepository } from '@/infra/database/prisma/repositories/prisma-answer-repository';
import { PrismaQuestionsCommentsRepository } from '@/infra/database/prisma/repositories/prisma-questions-comments-repository';
import { PrismaQuestionsAttachmentsRepository } from '@/infra/database/prisma/repositories/prisma-question-attachments-repository';
import { PrismaAnswerCommentsRepository } from '@/infra/database/prisma/repositories/prisma-answer-comments-repository';
import { PrismaAnswerAttachmentsRepository } from '@/infra/database/prisma/repositories/prisma-answer-attachments-repository';

@Module({
  providers: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionsCommentsRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuestionsCommentsRepository,
    PrismaQuestionsAttachmentsRepository,
    PrismaAnswerRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
