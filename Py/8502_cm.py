# 10의 5제곱이므로 for 가능
# h => 0 ~ 23
# m => 0 ~ 59 * 24
# s => 0 ~ 59 * (24 * 60)
# 각각 따로 계산 가능할까 => 0 ~ 59의 횟수를 구해서 곱하기 
# 근데 원하는 결과는 안 나옴

import sys

n = str(sys.stdin.readline().strip())

h = 0
m = 0
s = 0

for i in range(24):
	if n in str(i): h += 1

for i in range(60):
	if n in str(i): m += 1

m *= 24
s = m * 60
ans = h + m + s

print(f'h = {h}, m = {m}, s = {s}, ans = {ans}')

# ---------------------------------------------

count = 0

# 00:00:00부터 23:59:59까지 모든 시간을 순회
for h in range(24):
    for m in range(60):
        for s in range(60):
            # 시, 분, 초를 문자열로 변환하고 합친 후, 숫자 N이 있는지 확인
            if str(n) in str(h) + str(m) + str(s):
                count += 1
