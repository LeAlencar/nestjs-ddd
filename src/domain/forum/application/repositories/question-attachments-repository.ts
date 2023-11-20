import { QuestionAttachment } from '../../enterprise/entities/question-attachment';

export abstract class QuestionAttachmentsRepository {
  abstract indManyByQuestionId(
    questionId: string,
  ): Promise<QuestionAttachment[]>;

  abstract deleteManyByQuestionId(questionId: string): Promise<void>;
}
