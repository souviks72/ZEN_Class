db.mentors.insertOne({
    "mentorName": "Pugazharasan",
    "mentorEmail": "pugaz@email.com",
    "studentsCountForMentor": 6
});

db.courses.insertOne({
    "courseName": "Javascript Basics",
    "courseCategory": "PreBootCamp",
    "courseDuration": 3,
    "courseAuthorName": "Pugazharasan"
});

db.attendance.insertOne({
        "attendanceStatus": "P",
        "attendanceDate": "2020-09-08"
});

db.tasks.insertOne({
    "taskName": "HTML CSS Resume",
    "taskType": "Daily Task",
    "taskGivenDate": "2020-09-10",
    "taskDeadline": "2020-09-11",
    "taskUrl": "zen.guvi.com/tasks/xyz"
});

db.companyDrives.insertOne({
    "companyName": "Flipkart",
    "companyDriveDate": "2020-11-11",
    "companyJD": "Full Stack Developer",
    "companyType": "SuperDream"
});

db.codeKata.insertMany([{
        "codeKataCategoryName": "Stack",
        "codeKataQuestionId": "stk-1",
        "codeKataQuestionStatus": "completed"
    },
    {
        "codeKataCategoryName": "Stack",
        "codeKataQuestionId": "stk-2",
        "codeKataQuestionStatus": "completed"
    }
])

db.students.insertOne({
    "name" : "Souvik Mandal",
    "email": "svk@gmail.com",
    "mobile": 9087654321,
    "dob": "1996-09-12",
    "occupation": "student",
    "mentors" : [ObjectId("5f5a6dcc0abd728a324c9e7b")],
    "courses": [ObjectId("5f5a6e790abd728a324c9e7c")],
    "tasks": [ObjectId("5f5a6eca0abd728a324c9e7d")],
    "companyDrivesAttended": [ObjectId("5f5a6f170abd728a324c9e7e")],
    "codeKataQuestionsSolved": [ObjectId("5f5a6fd00abd728a324c9e7f"),ObjectId("5f5a6fd00abd728a324c9e80")]
});
db.students.updateOne({name: "Souvik Mandal"},{$set: {"attendance": [ObjectId("5f5a732b0abd728a324c9e82")]}})
db.students.aggregate([{ $lookup: { from: "mentors", localField: "mentors", foreignField: "_id", as: "Mentors"}}]).pretty()