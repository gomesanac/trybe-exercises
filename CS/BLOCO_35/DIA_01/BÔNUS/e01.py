def get_smallest_number(numbers):
    smallest = numbers[0]
    for number in numbers:
        if number < smallest:
            smallest = number
    return smallest


print(get_smallest_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
