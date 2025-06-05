import { app } from './app'
import { env } from './env'

async function bootstrap() {
  try {
    await app.listen({
      port: env.PORT,
      host: '0.0.0.0',
    })
    console.log(`HTTP Server running on ${env.PORT}`)
  } catch (error) {
    console.error('Error starting the server:', error)
  }
}

bootstrap()
