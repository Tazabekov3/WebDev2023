n = int(input())
arr = list(map(int, input().split()))

max_score = max(arr)
runner = -100

for i in arr:
    if i != max_score and i > runner:
        runner = i
        
print(runner)