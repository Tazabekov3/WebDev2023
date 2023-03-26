x = input()
res = ""

for i in range(len(x), 0, -1):
    res += x[i - 1]

print(int(res))