import sys
import Math

n, m = map(int, sys.stdin.readline().split(' '))

ans = 1
div = 1
t = n
b = m

for _ in range(m):

	ans *= t
	t -= 1

	div *= b
	b -= 1

print(ans // div)

# 내장 함수에 있었다... 파이썬 만만세
# print(Math.comb(n, m))
