import math

x = int(input())
res = 0

for i in range(1, int(math.sqrt(x)) + 1):
    if x % i == 0:
        if pow(i, 2) == x:
            res += 1
        else:
            res += 2

print(res)