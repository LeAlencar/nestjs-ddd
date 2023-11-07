import { Injectable } from '@nestjs/common';
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository';
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment';
import { PaginationParams } from '@/core/repositories/pagination-params';

@Injectable()
export class PrismaQuestionsCommentsRepository
  implements QuestionCommentsRepository
{
  create(questionComment: QuestionComment): Promise<void> {
    return Promise.resolve(undefined);
  }

  delete(questionComment: QuestionComment): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<QuestionComment | null> {
    throw new Error('Method not implemented');
  }

  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]> {
    return Promise.resolve([]);
  }
}
