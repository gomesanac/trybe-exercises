def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "Não é triângulo"
    elif side1 == side2 == side3:
        return "Triângulo Equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(type_of_triangle(1, 1, 1))
print(type_of_triangle(3, 2, 3))
print(type_of_triangle(6, 3, 5))
print(type_of_triangle(1, 2, 5))
