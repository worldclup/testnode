import { Router } from 'express';
import {
    user_register,
    user_vaccinate
} from '../controller/user_controller.js'

const router = Router()

router.post('/user_register',
    user_register,
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: "สมัครสมาชิกสำเร็จ"
        })
    }
)

router.post('/user_vaccinate',
    user_vaccinate,
    (req, res) => {
        res.status(200).json({
            'success': true,
            message: "กรอกข้อมูลวัคซีนสำเร็จ"
        })
    }
)

export default router;