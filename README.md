#### insta clone BE 


- Prisma: 타입 orm, 타입 정의로 테이블 생성 db등의 처리를 할수 있음, 처음 정의 후 클라이언트로 데이터 베이스를 조작할수 있음
```
  npx prisma init 실행
  prisma/schema.prisma 스키마 생성
  기본 데이터 베이스 설정: postgresql 자동생성된.env에서 패스워드를 불러옴
```  

- 테이블&클라이언트 생성

```
  schema.prisma에 모델을 정의 후 npx prisma migrate dev를 실행하면 테이블이 생성됨
  스키마 변경시 마이그레이트를 실행하여 변경을 반영해주어야 함
  dev를 붙이면 node_module 안에 prisma client도 생성 됨
```