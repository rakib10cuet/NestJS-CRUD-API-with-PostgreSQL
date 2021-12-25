import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// table name
@Entity('feed_posts')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
}
