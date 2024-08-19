import sys
import math

n = int(sys.stdin.readline().strip())

# 소수 판별
def is_prime(n):
  if (n == 1):
    return 0

  for i in range(2, int(math.sqrt(n)) + 1):
    if (n % i == 0):
      return 0 
  return 1

print(is_prime(n))