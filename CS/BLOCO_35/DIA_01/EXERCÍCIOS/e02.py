def get_media(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(get_media([1, 2, 5, 7, 9]))
