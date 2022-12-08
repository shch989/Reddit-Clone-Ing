import { IsEmail } from 'class-validator'
import { Length } from 'class-validator/types/decorator/decorators'
import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, BeforeInsert } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
export class User {
  @Index()
  @IsEmail(undefined, { message: '이메일 주소가 잘못되었습니다.' })
  @Length(1, 255, { message: '이메일 주소는 비워둘 수 없습니다.' })
  @Column({ unique: true })
  email: string

  @Index()
  @Length(3, 32, {message: "사용자 이름은 3자 이상이어야 합니다."})
  @Column()
  userName: string

  @Column()
  @Length(6, 255, {message: "비밀번호는 6자리 이상이어야 합니다."})
  password: string

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @OneToMany(() => Vote, (vote) => vote.user)
  votes: Vote[]

  // 비밀번호는 DB에 저장되기 전에 Bcrypt로 Hash한다
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6)
  }
}
