import sys
import math

x, y, z = map(int, sys.stdin.readline().strip().split())

ans = (x / (y * 2)) * z
print(math.trunc(ans))