import 'dotenv/config';
import express from 'express';
import Gun from 'gun';

const { PORT = '8000' } = process.env;

const app = express();
//@ts-ignore
app.use(Gun.serve);

const server = app.listen(+PORT, () => {
  console.log(`Gun Server listening at port ${PORT}`);
});

Gun({ web: server, file: 'local_data' });
