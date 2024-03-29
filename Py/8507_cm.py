import sys

n = int(sys.stdin.readline().strip())

for i in range(1, 7):
	if ((n - i) <= 6 and 0 < (n - i)):
		print(f'{i} {n - i}')
