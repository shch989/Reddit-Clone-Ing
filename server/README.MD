# Next.js & Express.js Reddit Clone
## Node.js
### Package.json 생성
```
$ npm init -y
```
### 모듈 설치
```
$ npm install morgan nodemon express --save
$ npm install typescript ts-node @types/node @types/express @types/morgan --save-dev
```
### tsconfig.json 생성
```
$ npx tsc --init
```
### typeORM 설치
```
$ npm install pg typeorm reflect-metadata --save
```
### typeORM 설정 파일 생성
```
$ npx typeorm init
```
### Entity에서 사용할 모듈
```
$ npm install bcryptjs class-validator class-transformer --save
$ npm install @types/bcryptjs --save-dev
```