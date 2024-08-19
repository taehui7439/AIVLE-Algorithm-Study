n = 5
k = 4
scores = [80, 60, 100, 75, 70]

win_arr = [0] * 5
cnt = 0

# for문을 돌면서 50을 선택 => 돌면서 50 양 옆, 50을 포함 is_win에 기록, selected_n에 50 추가
# is_win을 더함 => 나오는 값을 win_arr에 추가
# win_arr에서 k 이하 값 중 가장 큰 값 찾기

for i in range(n):
  result = scores[i]
  tmp = scores
  
  for j in range(n):
    if (j - 1 < 0): left = -1
    else: left = j - 1
    
    if (j + 1 > n): right = -1
    else: right = j + 1
    
    if (tmp[j] >= result):
      win_arr[i] += 1
    elif (left != -1 and tmp[j] >= result):
      win_arr[i] += 1
    elif (right != -1 and tmp[j] >= result):
      win_arr[i] += 1

win_arr_ns = win_arr.copy()
win_arr.sort(reverse=True)

for item in win_arr:
  if item <= k:
    # 여기서 처리해도 가능
    cnt = item
    break

if win_arr_ns.count(cnt) == 1:
  print(scores[win_arr_ns.index(cnt)])
else:
  ans = []
  
  for i in range(k):
    
# -----------------------------------------------------