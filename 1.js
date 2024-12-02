class Person {
    #_name;
    constructor(name) {
        this.#_name = name;
    }

    getName() {
            return this.#_name;
    };

    setName(newName) {
            this.#_name = newName;
    };
}

class Student extends Person {
    #_grade
    constructor(name, grade) {
        super(name);
        this.#_grade = grade;
        };

    getGrade() {
        return this.#_grade;
    };

    setGrade(newGrade) {
        if (newGrade >=1 && newGrade <= 10) {
            this.#_grade = newGrade;
        }
        else {
            console.log(`Введена некорректная оценка: ${newGrade}`);
        }
    };
}

    const student = new Student("Элли", 4);
    console.log(student.getName());
    console.log(student.getGrade());

    student.setName("Анна");
    student.setGrade(9);
    console.log(student.getName());
    console.log(student.getGrade());
    student.setGrade(11);
