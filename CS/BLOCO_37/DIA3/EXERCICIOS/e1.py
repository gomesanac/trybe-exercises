def count_even(n):
    count = 0
    for i in range(1, n + 1):
        print(i)
        if i % 2 == 0:
            count += 1
    return count


print(count_even(10))
