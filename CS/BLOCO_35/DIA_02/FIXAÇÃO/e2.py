import sys


def somatorio_argv():
    arguments = sys.argv
    arguments.remove(arguments[0])
    total = 0
    for arg in arguments:
        if not arg.isdigit():
            return print(
                f"Erro ao somar valores, {arg} é um valor inválido",
                file=sys.stderr,
            )
        total += int(arg)
    return print(f"Total: {total}")


def somatorio_input():
    numbers = input("Insira valores aqui, separados por espaço: ")

    numberArray = numbers.split(" ")
    total = 0
    for number in numberArray:
        if not number.isdigit():
            return print(
                f"Erro ao somar valores, {number} é um valor inválido",
                file=sys.stderr,
            )
        total += int(number)
    return print(f"Total: {total}")


somatorio_argv()
somatorio_input()
