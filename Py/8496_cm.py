import sys

n = int(sys.stdin.readline())
input_int = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(n)]

# 위치에 따라서 정렬
sorted_list = sorted(input_int, key = lambda x: (x[0]), reverse = False)
"""
정렬한 리스트의 중간 인덱스를 받아서 
해당 위치의 아파트의 번호를 원래 인덱스에서 얻음
"""

idx = (n // 2) + 1
ap_loc = sorted_list[idx][0]
ans = input_int.index(ap_loc)

print(ans)

# ----------------------------------------------------

# 새로 코드 작성
# 위치만 생각할 게 아니라 주민 수를 모두 생각해서 중앙 위치를 찾음
# 각 아파트 단지 사이의 거리 * 주민수를 계산
# 그 숫자의 최소를 구해서 그 최소의 인덱스를 출력하는 방식


n = int(sys.stdin.readline())
input_int = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(n)]

min_dist = float('inf')
best_idx = -1

for i in range(n):
    dist_sum = 0

    for j in range(n):
        dist_sum += abs(input_int[i][0] - input_int[j][0]) * input_int[j][1]
    
    print(f'{input_int[i]}의 총 합: {dist_sum}, i = {i}')

    if (dist_sum < min_dist):
        min_dist = dist_sum
        best_idx = i

print(best_idx + 1)