n = int(input())
arr = list(map(int, input().split()))
res = 0

for i in range(1, n - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        res += 1

print(res)