def draw_square(n):
    string = ""
    for index in range(n):
        string += "*"
    for index in range(n):
        print(string)


draw_square(5)


def draw_square_2(n):
    for row in range(1, n + 1):
        for column in range(1, n + 1):
            print("*", end="")
        print()


draw_square_2(5)
