function getDeviceDetails(DeviceID) {
    // get device details from db
    // we select * from Devices d where d.Device_ID = Device_ID;
    // we select * from Patients p join Medicine_History mh on mh.Patient_ID = p.Patient_ID where Device_ID = mh.Device_ID
    // return both device details and patient details
    const myDb = require('mariadb');
    const db = mariadb.createPool({
        host:'192.168.1.107',
        user: 'user',
        password: 'arenacatupdatefreeze1!',
        connectionLimit: 5,
        acquiteTimeout: 30000
    });

    let deviceInfo;
    let patientInfo;
    asyncGetInfo();
    async function asyncGetInfo() {
        db.getConnection()
        .then(conn => {
            conn.query(`select * from Devices d where d.Device_ID = ${DeviceID}`)
                .then((rows) => {
                    // filter data
                    console.log(rows);
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
            
            conn.query(`select * from Patients p join Medicine_History mh on mh.Patient_ID = p.Patient_ID where mh.Device_ID = ${DeviceID}`)
                .then((rows) => {
                    console.log(rows)
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log('Not connected to DB!')
        })

        connection.end();
    }


    return [deviceInfo, patientInfo]
}

function updateMedicationStatus(DeviceID) {
    // Communicate to specfied device
    // update web ui with flow rate, time remaining and volume remaining
    const express = require('express');
    const app = express ();
    app.use(express.json)

    const PORT = process.env.PORT || 3306;

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })

    app.get("/status", (request, response) => {
        const status = {
            "Status": "Running"
        };

        response.send(status)
    });

    // app get the client's info
}