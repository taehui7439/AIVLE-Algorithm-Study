import sys

# 입력을 어케 받냐
# 1 ~ 12월
# 각 30 ~ 31일이 끝임.
# 각 날짜마다 숫자가 있고 숫자, 색상에 맞게 갯수 더하기

# 길이 30 ~ 31 배열 12개
# 0 ~ 9의 빨, 파, 검 횟수 기록 배열
# 길이 31의 확인 배열
# 공휴일 계산 => 돌다가 월이 맞으면 해당 월의 공휴일을 먼저 표시, 색깔 기록, 확인 기록
# 일요일 계산 => 시작 요일  = 월 => 월 + (7 - 1(월요일의 인덱스)) = 다음 일요일 => 그 다음부터는 7씩 더함
# 토요일 계산 => 시작요일 = 월 => 월 + (7 - 2(월요일의 인덱스+1)) = 다음 토요일 => 그 다음부터는 7씩 더함
# 토, 일 확인 배열에 기록하고, 기록 안된건 다 평일로 계산
# 각 월의 시작 요일이 무슨 요일인지 기록 => 1일의 요일 + (31 % 7) = 다음 달 시작 요일



# start_week_day = str(sys.stdin.readline().strip())
# red_day = int(sys.stdin.readline().strip())
# red_list = []

# for i in range(red_day):
# 	line = list(map(int, sys.stdin.readline().strip().split(' ')))
# 	red_list.append(line)

# # 공휴일 배열을 월을 기준으로 정렬
# red_list.sort(key=lambda x: x[0])

# # 요일을 반복할 배열
# week_day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
# # 각 월의 일 수
# max_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
# # 색깔 표시 배열
# num_color =[ [0, 0, 0] for _ in range(10)]

# print(num_color)

# # 12월까지 반복
# for i in range(1, 13):
# 	# 시작 요일 지정
# 	start = start_week_day
	
# 	# 확인 배열
# 	check = [0] * max_day[i - 1]
	
# 	print(f"check = {check}")
	
# 	# 공휴일 계산
# 	for j in range(red_day):
# 		if (red_list[j][0] == i):
# 			check[(red_list[j][1] - 1)] = 1
# 			# red + 1, 날짜의 십의 자리, 일의 자리 분리해서 숫자에 기록
# 			tmp = red_list[j][1]
# 			one = tmp % 10
# 			ten = tmp // 10
			
# 			num_color[one][0] += 1
# 			num_color[ten][0] += 1
	
# 	# 일요일 계산
# 	start_sunday = 1
# 	# 시작이 일요일인 경우
# 	if (start == 'SUN'):
# 		check[0] = 1
# 		num_color[0][0] += 1
# 	else:
# 		# 시작이 일요일이 아닌 경우, 첫 일요일을 계산해서 추가
# 		start_sunday = 1 + (7 - week_day.index(start))
# 		check[start_sunday - 1] = 1
# 		num_color[start_sunday][0] += 1
		
# 	# 나머지 일요일을 계산해서 추가 (십의 자리와 일의 자리 계산)
# 	for k in range(4):
# 		if (start_sunday + 7 <= max_day[i - 1]):
# 			start_sunday += 7
# 			check[start_sunday - 1] = 1
			
# 			sun_one = start_sunday % 10
# 			num_color[sun_one][0] += 1
# 			if (start_sunday >= 10):
# 				sun_ten = start_sunday // 10
# 				num_color[sun_ten][0] += 1
	
# 	# 토요일 계산도 동일하게 진행
# 	start_saturday = 1
# 	if (start == 'SAT'):
# 		check[0] = 1
# 		num_color[0][1] += 1
# 	else:
# 		start_saturday = 1 + (7 - week_day.index(start))
# 		check[start_saturday - 1] = 1
# 		num_color[start_saturday][1] += 1
		
# 	for k in range(4):
# 		if (start_saturday + 7 <= max_day[i - 1]):
# 			start_saturday += 7
# 			check[start_saturday - 1] = 1
			
# 			sun_one = start_saturday % 10
# 			num_color[sun_one][1] += 1
# 			if (start_saturday >= 10):
# 				sun_ten = start_saturday // 10
# 				num_color[sun_ten][1] += 1
	
# 	# 평일 계산
# 	for l in range(max_day[i - 1]):
# 		# 이미 표시된 날짜 아니면 해당 날짜를 평일로 계산
# 		if (check[l] == 0):
# 			check[l] = 1
# 			day_one = (l + 1) % 10
# 			day_ten = (l + 1) // 10
# 			num_color[day_one][2] += 1
# 			num_color[day_ten][2] += 1
	
# 	# 마지막에 시작 요일을 새로 계산
# 	start_week_day = week_day[week_day.index(start_week_day) + (max_day[i - 1] % 7)]


# print(num_color)

# ===========================================================


start_week_day = str(sys.stdin.readline().strip())
red_day = int(sys.stdin.readline().strip())
red_list = []

for i in range(red_day):
	line = list(map(int, sys.stdin.readline().strip().split(' ')))
	red_list.append(line)

# 공휴일 배열을 월을 기준으로 정렬
red_list.sort(key=lambda x: x[0])

# 요일을 반복할 배열
week_day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
# 각 월의 일 수
max_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
# 색깔 표시 배열
num_color =[ [0, 0, 0] for _ in range(10)]

print(num_color)

# 12월까지 반복
for i in range(1, 13):
    # 시작 요일 지정
    start = start_week_day
    
    # 확인 배열
    check = [0] * max_day[i - 1]
    
    # 공휴일 계산
    for j in range(red_day):
        if red_list[j][0] == i:
            check[red_list[j][1] - 1] = 1
            # red + 1, 날짜의 십의 자리, 일의 자리 분리해서 숫자에 기록
            tmp = red_list[j][1]
            one = tmp % 10
            ten = tmp // 10
            
            num_color[one][0] += 1
            num_color[ten][0] += 1

    # 각 달의 시작 요일을 기반으로 일요일과 토요일 계산
    day_index = week_day.index(start)
    for day in range(1, max_day[i - 1] + 1):
        if week_day[day_index] == 'SUN':
            check[day - 1] = 1
            num_color[day % 10][0] += 1
            if day >= 10:
                num_color[day // 10][0] += 1
        elif week_day[day_index] == 'SAT':
            check[day - 1] = 1
            num_color[day % 10][1] += 1
            if day >= 10:
                num_color[day // 10][1] += 1
        
        day_index = (day_index + 1) % 7  # 요일 업데이트
    
    # 평일 계산
    for l in range(max_day[i - 1]):
        if check[l] == 0:
            day_one = (l + 1) % 10
            day_ten = (l + 1) // 10
            num_color[day_one][2] += 1
            if day_ten > 0:
                num_color[day_ten][2] += 1
    
    # 다음 달의 시작 요일 계산
    start_week_day = week_day[(week_day.index(start) + max_day[i - 1]) % 7]

for row in num_color:
    print(row)