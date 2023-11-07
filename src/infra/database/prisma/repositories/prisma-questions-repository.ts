import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { Question } from '@/domain/forum/enterprise/entities/question';
import { PaginationParams } from '@/core/repositories/pagination-params';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infra/database/prisma/prisma.service';
import { PrismaQuestionMapper } from '@/infra/database/prisma/mappers/prisma-question-mapper';

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}

  create(question: Question): Promise<void> {
    return Promise.resolve(undefined);
  }

  delete(question: Question): Promise<void> {
    return Promise.resolve(undefined);
  }

  async findById(id: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        id,
      },
    });

    if (!question) return null;

    return PrismaQuestionMapper.toDomain(question);
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
    });

    if (!question) return null;

    return PrismaQuestionMapper.toDomain(question);
  }

  findManyRecent(params: PaginationParams): Promise<Question[]> {
    return Promise.resolve([]);
  }

  save(question: Question): Promise<void> {
    return Promise.resolve(undefined);
  }
}
