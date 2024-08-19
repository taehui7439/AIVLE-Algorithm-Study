import sys

n, m = map(int, sys.stdin.readline().strip().split())
item, amount = map(int, sys.stdin.readline().strip().split())
item_list = [int(sys.stdin.readline().strip()) for _ in range(item)]

# 아이템 배열 정렬해서 가장 큰 값 찾음
item_list.sort(reverse=True)

sum = 0
for i in range(amount):
  sum += item_list[i]

ans = n + (m * (sum))
print(ans)