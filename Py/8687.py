phone_num = list(map(str, sys.stdin.readline().strip().split('-')))

def solution(phone_num):
  fir = phone_num[0]
  sec = phone_num[1]
  thd = phone_num[2]
  
  if (len(fir) == 3 and fir == "010" and len(sec) == 4 and len(thd) == 4):
    if sec.isdigit and thd.isdigit:
      print("valid")
    else:
      print("invalid")
  else:
    print("invalid")
  
  return

solution(phone_num)


# ==============================

import sys

phone_num = sys.stdin.readline().strip().split('-')

def solution(phone_num):
    if len(phone_num[0]) == 3 and phone_num[0] == "010" and len(phone_num[1]) == 4 and len(phone_num[2]) == 4:
        if phone_num[1].isdigit and phone_num[2].isdigit:
            print("valid")
        else:
            print("invalid")
    else:
        print("invalid")

solution(phone_num)