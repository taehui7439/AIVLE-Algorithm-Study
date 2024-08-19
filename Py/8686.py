import sys, math

num_list = list(map(int, sys.stdin.readline().split(' ')))

# 2 3 2 => 10?
# 3 2 3 이라면 1:1이니까 10
# 6 3 2 => 4?
# 3번 - 6번 -> 2:3이니 6번 - 9번 
# 3:6 => 2:3이니 3:6:9 => 3 / 9 * 10 => 10/3 나오면 올림해서 4
# 3:2:3 => 3 / 3 * 10 => 10

def solution(num_list):
  a, b, c = num_list
  
  # a, b간 관계
  fst_a = b
  fst_b = a
  
  # b, c간 관계
  sec_b = c
  sec_c = b
  
  print(f"fst_a={fst_a}, fst_b={fst_b}, sec_b={sec_b}, sec_c={sec_c}")
  
  # b간의 비율 차이 계산해서 c에 곱함
  diff = fst_b / sec_b
  sec_c *= diff
  
  print(f"diff={diff}, sec_c={sec_c}")
  
  # 답 계산
  tmp = round(fst_a / sec_c, 2)
  ans = math.ceil(tmp * 10)
  
  return ans

print(solution(num_list))