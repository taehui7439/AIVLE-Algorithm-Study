import sys

"""
3 5 5
a, 3 => 3
b, 5 => 5
5, a => 5

a = 3인 경우 => c = 5인 경우 => 가능
b = 3인 경우 => c = 5 => 가능
"""

x, y, z = map(int, sys.stdin.readline().strip().split())

def is_possible(x, y, z):
  max_value = max(x, y, z)
  
  # 3개 중 2개가 같아야하고, 최댓값 이하여야함
  if (x == max_value or y == max_value or z == max_value) and sorted([x, y, z]).count(max_value) >= 2:
    return "possible"
  else:
    return "impossible"

print(is_possible(x, y, z))