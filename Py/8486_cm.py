import sys

input = int(sys.stdin.readline())

num = (input ** 2) * 3.14
int_part = int(num)
dec_part = num - int_part

if (dec_part != 0):
    print(num)
else: print(int_part)
