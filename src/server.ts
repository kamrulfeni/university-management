import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`database connected is successfully `);

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    })
  } catch (err) {
    console.log('failed to connect database', err);
  }
}

bootstrap()
