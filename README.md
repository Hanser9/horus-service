This is a BackEnd base develop for Horus

## Getting Started

For run the proyect do you need already installed mysql and add in the root directory the proyect this envs into file .env:

```bash
PORT=4000
MYSQL_HOST={yours url for mysql}
MYSQL_USER={user_mysql}
MYSQL_PASSWORD={pass_mysql}
MYSQL_DATABASE={database}
```

!!Important this proyect in the first run create automatically the table users in the database, if yo dont use this table first delete file: 
~/src/entity/Users.ts

And finish, run the development server:

```bash
npm install

After install all packages, run:

npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result only for develop.

