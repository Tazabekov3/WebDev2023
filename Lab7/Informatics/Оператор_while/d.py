n = int(input())

while n > 0:
    if n % 2 == 1 and n > 1:
        print("NO")
        break
    elif n == 1:
        print("YES")
        break
    else:
        n /= 2