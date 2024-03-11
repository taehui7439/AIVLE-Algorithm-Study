import sys

input_str = list(map(int, sys.stdin.readline().split(' ')))
cnt = 1
target = input_str[2]
remem = input_str[0]
forget = input_str[1]

ans = (target - (1 * forget)) // (remem - forget)

if ((target - (1 * forget)) % (remem - forget) > 0):
    ans += 1

print(ans)