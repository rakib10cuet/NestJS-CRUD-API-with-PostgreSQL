import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './models/post.entity';

@Module({
  imports: [
    //db connection
    TypeOrmModule.forFeature([FeedPostEntity]),
  ],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
