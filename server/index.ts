import cors from 'cors'
import dotenv from 'dotenv'
import UserModule from './src/Module/User.module'
import { APP, DEFAULT_URL } from './src/app'

dotenv.config()

const PORT = process.env.PORT

APP.listen(PORT, () => {
    console.log(`[SERVER] Server started at http://localhost:${PORT}${DEFAULT_URL}`);
});

APP.use(cors());

UserModule.SendAllData();
UserModule.SendData()

