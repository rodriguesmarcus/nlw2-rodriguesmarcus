const db = require('./db')
const createProffy = require('./createProffy')

db.then(async (db) => {
    // Data insert
    proffyValue = {
        name: "Marcus Rodrigues",
        avatar: "https://avatars0.githubusercontent.com/u/13170888?s=460&u=cb4f7c385baf603f44419a224bda534f072821af&v=4",
        whatsapp: "71985365498",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias dicta libero,<br><br> cupiditate excepturi a vel deleniti dignissimos fugit eius iste, rem consectetur hic repudiandae molestiae ut. Fuga, rem voluptate.",

    }

    classValue = {
        subject: 1,
        cost: "20",
        // proffy Id will come from db
    }

    classScheduleValues = [
        // class_id will come from db 
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Data query

    // all the proffys
    const selectedProffys =  await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // check the proffys' classes of an specific proffy and bring the proffy data
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // check all the data from a specific proffy and bring all data
    // time_from needs to be less or greater than time_to
    // there is restrictions in work time (08-18), for example
    const selectClassSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1200"
        AND class_schedule.time_to > "1200"

    `)

    console.log(selectClassSchedules)

})