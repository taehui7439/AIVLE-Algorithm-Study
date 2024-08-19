import sys

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split(' ')))

print(arr)

arr.sort(reverse=True)
ans = 0

for i in range(n):
    cal = arr[i] * (i + 1)
    ans = max(ans, cal)

print(ans)