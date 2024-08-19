import sys

n, m = map(int, sys.stdin.readline().split())
str_list = list(str(sys.stdin.readline().strip()))
print(str_list)
ans = []
for i in range(n):
  alpha = str_list[i] * m
  ans.append(alpha)

print(''.join(ans))