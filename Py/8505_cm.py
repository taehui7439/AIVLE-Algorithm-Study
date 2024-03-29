# -30
# minute - 30 < 0 이면 60 - (abs(m - 30))
# 그리고 시간을 -1
# h - 1 < 0 이면 24 - (abs(h - 1))
import sys

h, m = map(int, sys.stdin.readline().strip().split(" "))

if (m - 30 < 0):
	m = 60 - (abs(m - 30))

	if (h - 1 < 0):
		h = 24 - (abs(h - 1))
	else: h -= 1
else:
	m -= 30

print(f'{h} {m}')