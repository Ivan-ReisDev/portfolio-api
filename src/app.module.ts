import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './module/projects/projects.module';
import { UploadsModule } from './module/uploads/uploads.module';
import { EmailsModule } from './module/emails/emails.module';
import { ConfigService } from './module/config/config.service';
import { ContactModule } from './module/contact/contact.module';
import { NodemailerModule } from './infrastructure/providers/nodemailer/nodemailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    ProjectsModule,
    UploadsModule,
    EmailsModule,
    ConfigModule,
    ContactModule,
    NodemailerModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
