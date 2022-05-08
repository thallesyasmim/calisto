import { app } from './app'

app.listen(process.env.PORT || 5858, () => console.info(`Server is running`))
