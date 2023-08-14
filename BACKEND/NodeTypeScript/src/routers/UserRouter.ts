import { Router } from 'express';
import { UserController } from '../controllers/UserControllers';
import { GlobalCheckErrorMiddleWare } from '../middleware/CheckError';
import { Utils } from '../utils/Utils';
import { UserValidators } from '../validators/UserValidators';

class UserRouter {

    public router: Router;


    constructor() {
        this.router = Router();

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }


    getRoutes() {

        //STEP 3: To resend the verification
        this.router.get('/send/verification/email', UserValidators.resendVerificationEmail(), UserController.resendVerificationEmail);

        //STEP 4: To reset the password
        this.router.get('/reset/password', UserValidators.sendResetPassword(), GlobalCheckErrorMiddleWare.checkError, UserController.sendResetPassword)

        //To check the index
        this.router.get('/test',UserController.test)

        //To check web-scraping
        this.router.get('/web-scraping',UserController.webScraping)
   
    }
    postRoutes() {
        //STEP 1 : To create a user using signup
        this.router.post('/signup', UserValidators.signup(), GlobalCheckErrorMiddleWare.checkError, UserController.signup);

        this.router.post('/login', UserValidators.login(), GlobalCheckErrorMiddleWare.checkError, UserController.login);

    }
    patchRoutes() {

        //STEP 2 : To verify the email
        this.router.patch('/verify', UserValidators.verifyUser(), GlobalCheckErrorMiddleWare.checkError, UserController.verify);

        //STEP 5 : To update the password
        this.router.patch('/update/password', GlobalCheckErrorMiddleWare.authentication, UserValidators.updatePassword(), GlobalCheckErrorMiddleWare.checkError, UserController.updatePassword)

        //STEP 6 : To update the profile pic.
        this.router.patch('/update/profilePic',GlobalCheckErrorMiddleWare.authentication,new Utils().multer.single('profile_pic'),UserValidators.updateProfilePic(),GlobalCheckErrorMiddleWare.checkError,UserController.updateProfilePic)

    }
    deleteRoutes() {

    }

}

export default new UserRouter().router;