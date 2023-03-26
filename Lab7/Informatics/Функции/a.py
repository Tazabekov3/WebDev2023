def mini(a, b, c, d):
    return min(min(a, b), min(c, d))

a, b, c, d = map(int, input().split())

print(mini(a, b, c, d))