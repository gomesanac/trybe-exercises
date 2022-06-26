def count_even(n):
    if n == 0:
        return 0
    if n % 2 == 0:
        return 1 + count_even(n - 1)
    else:
        return count_even(n - 1)


print(count_even(10))
