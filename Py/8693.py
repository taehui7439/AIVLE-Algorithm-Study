import sys

# 00 ~ ff
# 12+34+56 => avg 34
# int("ff", 16) => 10진수로 변환

color_str = str(sys.stdin.readline().strip())

def solution(color_str):
  red = color_str[1:3]
  green = color_str[3:5]
  blue = color_str[5:7]
  
  # 16진수를 10진수로 변환 
  red_ten = int(red, 16)
  green_ten = int(green, 16)
  blue_ten = int(blue, 16)
  
  avg = round((red_ten + green_ten + blue_ten) / 3)
  print(avg)
  
  ans = "#{:02X}{:02X}{:02X}".format(avg, avg, avg)
  
  return ans

print(solution(color_str))

