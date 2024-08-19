import sys
from collections import deque

# input = sys.stdin.readline()

bus_stops = int(sys.stdin.readline())
bus_ways = int(sys.stdin.readline())
info = [list(map(int, sys.stdin.readline().strip().split(' '))) for _ in range(bus_ways)]
start, end = list(map(int, sys.stdin.readline().strip().split(' ')))

print(f"bus stops = {bus_stops}")
print(f"bus_ways = {bus_ways}")
print(f"info = {info}")
print(f"location_arrival = {start, end}")

# 시간을 기준으로 정렬해서 시작지점이 같은 걸 찾아서 순회를 시작하면?
# 그래프를 만들어서 순회하면 어떨까.. 정렬한 뒤에 그래프에 넣으면 적은 순부터 들어감
# 그래프로 풀면 dfs 문제가 됨

# info 시간 기준 정렬
info.sort(key=lambda x: x[2])

# 정렬한 info 돌면서 graph 만듬
graph = {i: [] for i in range(1, bus_ways)}

for a, b, t in info:
  graph[a].append((b, t))
  graph[b].append((a, t))

def bfs(start):
  # 각 시작 버스 정류장에서 가장 적은 시간 저장
  min_time = {i: float('inf') for i in range(1, bus_ways + 1)}
  min_time[start] = 0
  
  # 현재 정류장, 현재까지 시간을 큐로 저장
  queue = deque([(start, 0)])

  while queue:
    curr_stop, curr_time = queue.popleft()
    
    for next_stop, time in  graph[curr_stop]:
      next_time = curr_time + time
      
      if (next_time < min_time[next_stop]):
        min_time[next_stop] = next_time
        queue.append((next_stop, next_time))

  return min_time[end]

print(bfs(start))