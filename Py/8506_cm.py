import sys

n = int(sys.stdin.readline().strip())

star = "**"

for i in range(n):
	print((" " * i) + star)
