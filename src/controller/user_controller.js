import pool from '../../config/connect.js'

export const user_register = async (req, res) => {

    const sql_select = 'SELECT id_card FROM user_info WHERE id_card = ?'

    try {
        const [[resSQL]] = await pool.query(sql_select, req.body.id_card)
        // console.log(resSQL)
        if (!resSQL) {
            let regInfo = {
                id_card: req.body.id_card,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                birthday: req.body.birthday,
                address: JSON.stringify(req.body.address),
                phone_number: req.body.phone_number
            }

            // console.log(regInfo)

            const sql_insert = 'INSERT INTO user_info SET ?'
            const [response] = await pool.query(sql_insert, regInfo)

            // console.log(response)
            if (response.insertId !== 0) {
                return res.status(200).send({ Status: '1', Message: 'บันทึกข้อมูลสำเร็จ' });
            }
        }

        return res.status(200).send({ Status: '1', Message: 'บัตรประชาชนถูกใช้งานแล้ว' });
    }
    catch (error) {
        return error;
    }
}

export const user_vaccinate = async (req, res) => {

    let vac_details = {
        id_card: req.body.id_card,
        vac1: JSON.stringify({ name: req.body.vac1_name, date: req.body.vac1_date }),
        vac2: JSON.stringify({ name: req.body.vac2_name, date: req.body.vac2_date }),
        vac3: JSON.stringify({ name: req.body.vac3_name, date: req.body.vac3_date }),
        vac4: JSON.stringify({ name: req.body.vac4_name, date: req.body.vac4_date })
    }

    const sql_select = 'SELECT vaccinate_info.id_card FROM vaccinate_info WHERE vaccinate_info.id_card = ?'

    try {
        const [[resSQL]] = await pool.query(sql_select, req.body.id_card)

        // console.log(resSQL)
        if (resSQL) {
            const sql_update = 'UPDATE vaccinate_info SET vaccinate_info.vac1=?,vaccinate_info.vac2=?,vaccinate_info.vac3=?,vaccinate_info.vac4=? WHERE vaccinate_info.id_card=?'
            const [response_up] = await pool.query(sql_update, [vac_details.vac1, vac_details.vac2, vac_details.vac3, vac_details.vac4, vac_details.id_card])
            console.log(response_up)
            if (response_up.insertId === 0) {
                return res.status(200).send({ Status: '1', Message: 'อัพเดตข้อมูลสำเร็จ' });
            }
        }
        else {
            const sql_insert = 'INSERT INTO vaccinate_info SET ?'
            const [response_in] = await pool.query(sql_insert, vac_details)
            console.log(response_in)
            if (response_in.insertId === 0) {
                return res.status(200).send({ Status: '1', Message: 'กรอกข้อมูลสำเร็จ' });
            }
        }
    }
    catch (error) {
        return error;
    }
}