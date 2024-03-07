import sys

a = list(map(str, sys.stdin.readline().split(' ')))
idx = a.index('c')

print(" ".join(a[:(idx + 1)]))