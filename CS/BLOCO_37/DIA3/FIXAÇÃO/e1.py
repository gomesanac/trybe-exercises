def somatorio(n):
    if n == 1:
        return 1
    return n + somatorio(n - 1)


print(somatorio(5))
