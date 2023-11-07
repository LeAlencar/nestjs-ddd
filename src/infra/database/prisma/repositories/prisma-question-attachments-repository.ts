import { Injectable } from '@nestjs/common';
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository';
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment';

@Injectable()
export class PrismaQuestionsAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  deleteManyByQuestionId(questionId: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]> {
    return Promise.resolve([]);
  }
}
