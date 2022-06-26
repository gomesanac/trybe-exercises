# 1 litro => 3m2
# 1 lata => 18 litros => R$18,00

def paint_costs(area):
    can_price = 80
    meter_per_liter = 3
    liter_per_can = 18
    required_liters = area // meter_per_liter
    required_cans = required_liters / liter_per_can
    if required_cans < 1:
        required_cans = 1
    return required_cans, required_cans * can_price


print(paint_costs(50))
