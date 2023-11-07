import { Injectable } from '@nestjs/common';
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository';
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment';
import { PaginationParams } from '@/core/repositories/pagination-params';

@Injectable()
export class PrismaAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  create(answerComment: AnswerComment): Promise<void> {
    return Promise.resolve(undefined);
  }

  delete(answerComment: AnswerComment): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<AnswerComment | null> {
    throw new Error();
  }

  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]> {
    return Promise.resolve([]);
  }
}
