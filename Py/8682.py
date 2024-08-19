import sys

n, m = map(int, sys.stdin.readline().split())
nums_list = list(map(int,sys.stdin.readline().split()))

# 진법을 만드는 함수
# 9까지는 숫자, 10 ~ 35는 A ~ Z, 36 ~ 61은 a ~ z
def solution(n, q):
  base = ''
  
  while (n > 0):
    n, mod = divmod(n, q)
    
    if (mod <= 9):
      base += str(mod)
    elif (mod <= 35):
      base += str(chr(mod + 55))
    elif (mod <= 61):
      base += str(chr(mod + 61))
  
  return base[::-1]


# 원래 파일 크기 계산
str_list = map(str, nums_list)
str_l = ' '.join(str_list)
file_size = len(str_l)

print(file_size)

# m 이하 파일 크기로 10 이상의 가장 작은 진법 출력
# 62진법까지 돌면서 사이즈가 m보다 크다면 넘기고 아니면 파일 크기 저장
ans = 0
for i in range(10, 63):
  new_size = 0
  
  for j in range(n):
    # 숫자 갯수만큼 돌면서 파일 사이즈 측정
    # 각 숫자 변환해서 사이즈를 더해줌
    cal_str_num = solution(nums_list[j], i)
    new_size += len(cal_str_num)
  
  # 공백 길이 더함
  new_size += (n - 1)
  
  # 새로운 사이즈가 원래 사이즈보다 작으면 현재 진법을 저장
  if (new_size <= m):
    ans = i
    break


# 만약 62진법 안에 안나오면 -1 저장
if (ans == 0):
  ans = -1

print(ans)