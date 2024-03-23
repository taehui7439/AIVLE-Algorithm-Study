import sys

n = int(sys.stdin.readline())
ans = [0 for _ in range(10)]

for i in range(1, n + 1):
	sp = list(str(i))

	for n in sp:
		ans[int(n)] += 1

for t in ans:
	print(t, end = ' ')
