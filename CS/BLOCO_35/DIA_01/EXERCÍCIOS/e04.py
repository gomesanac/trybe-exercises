def get_biggest_name(names):
    biggest = ""
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest


print(
    get_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
)
