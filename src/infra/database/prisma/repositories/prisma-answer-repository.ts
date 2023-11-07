import { Injectable } from '@nestjs/common';
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository';
import { Answer } from '@/domain/forum/enterprise/entities/answer';
import { PaginationParams } from '@/core/repositories/pagination-params';

@Injectable()
export class PrismaAnswerRepository implements AnswersRepository {
  create(answer: Answer): Promise<void> {
    return Promise.resolve(undefined);
  }

  delete(answer: Answer): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<Answer | null> {
    throw new Error();
  }

  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]> {
    return Promise.resolve([]);
  }

  save(answer: Answer): Promise<void> {
    return Promise.resolve(undefined);
  }
}
