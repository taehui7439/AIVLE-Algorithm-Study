import sys

input_int = list(map(int, sys.stdin.readline().rstrip().split(' ')))

x = input_int[0]
y = input_int[1]

while(y):
    tmp = x % y
    x = y
    y = tmp

print(x)