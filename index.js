import inquirer from "inquirer";
// create student class 
class Student {
    name; // pass key value 
    constructor(n) {
        this.name = n; // give the value of this parameter to above key
    }
}
// create person class
class Person {
    // define students array whichstore the students name 
    students = [];
    // create method in which we pass parameter obj 
    // which store the Student name 
    addStudent(obj) {
        // and then push in students array which we already define 
        this.students.push(obj);
    }
}
// create variable for person class 
const persons = new Person();
// create function for user input
const programStart = async (persons) => {
    do {
        console.log("WELCOME");
        const ans = await inquirer.prompt({
            // make list what will be do visitor
            name: "Select",
            type: "list",
            message: "Whom Would you like to interact with ",
            choices: ["Staff", "student", "Exist"] // give list 
        }); // if visitor want to interact Staff then if will be work
        if (ans.Select == "Staff") {
            console.log("You approch the staff room. please feel free to ask any question ");
        } // if visitor want to interact Student then if will be work
        else if (ans.Select == "student") {
            // then we will ask which student he want to conversasion or anything 
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you want to interact ",
            });
            const student = persons.students.find(val => val.name == ans.student);
            // if student are not available in list
            // if student are not available in list
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you !`);
                console.log("New Student Added");
                console.log("Current Student list : ");
                console.log(persons.students);
            }
            // if student are available in array list
            else {
                console.log(`Hello I am ${student.name}. Nice to see you again `);
                console.log("Existing student list ");
                console.log(persons.students);
            }
        } // if visitor select Exist option 
        else if (ans.Select == "Exist") {
            console.log("Existing program");
            process.exit();
        }
    } while (true);
};
// call function 
programStart(persons);
