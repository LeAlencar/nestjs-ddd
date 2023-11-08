import { Module } from '@nestjs/common';
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller';
import { CreateAccountController } from '@/infra/http/controllers/create-account.controller';
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller';
import { FetchRecentQuestionsController } from '@/infra/http/controllers/fetch-recent-questions.controller';
import { DatabaseModule } from '../database/database.module';
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AuthenticateController,
    CreateAccountController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [CreateQuestionUseCase],
})
export class HttpModule {}
