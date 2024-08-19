import sys

# 양수면 곱함
# 0이면 넘김
# 음수면 짝수 개로 곱함

n = int(sys.stdin.readline())
nums_list = list(map(int, sys.stdin.readline().strip().split()))
nums_list.sort(reverse=True)
ans = [0]

# 만약 2개 이상이면 맨 뒤부터 2개를 곱할 수 있음
# 1. 양수만 3개
# 2. 음수 2개, 양수 1개
# 3. 음수가 2개가 안되면, 양수만
# 4. 음수만 있는 경우

# 0보다 작은 숫자가 몇 개인지 확인
minus_cnt = 0
for i in nums_list:
  if (i < 0): minus_cnt += 1

# 양수 곱
tmp = 1
for i in range(3):
  if (nums_list[i] > 0):
    tmp *= nums_list[i]
ans.append(tmp)

# 음수 포함 곱, 음수만 있는 경우
if (minus_cnt >= 2):
  tmp = nums_list[0] * nums_list[-1] * nums_list[-2]
  tmp2 = nums_list[-1] * nums_list[-2]
  ans.append(tmp)
  ans.append(tmp2)

result = max(ans)
print(result)