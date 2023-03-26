x = input()
res = 0

for i in range(len(x), 0, -1):
    if x[i - 1] == "1":
        res += pow(2, len(x) - i)

print(res)