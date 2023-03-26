def power(a, b):
    res = 1.0
    for i in range(b):
        res *= a
    return res

a, b = input().split()

print(power(float(a), int(b)))