def draw_triangle(n):
    for row in range(1, n + 1):
        for column in range(1, row + 1):
            print("*", end="")
        print()


draw_triangle(5)
