def print_student():
    approved = []
    with open("students.txt", "r") as file:
        for line in file:
            student = line.split(" ")
            if int(student[1]) >= 6:
                approved.append(student[0] + "\n")

    with open("approved.txt", "w") as file:
        print(approved)
        file.writelines(approved)


print_student()
