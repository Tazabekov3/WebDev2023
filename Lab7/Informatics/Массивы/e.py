n = int(input())
arr = list(map(int, input().split()))
res = False

for i in range(1, n):
    if arr[i] / arr[i - 1] > 0:
        res = True
        break

if res:
    print("YES")
else:
    print("NO")