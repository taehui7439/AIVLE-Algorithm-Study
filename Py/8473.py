import sys

input_str = (sys.stdin.readline().rstrip())

def id_validate(str):
    
    if (len(str) > 20 or not str.isalpha() or not str.isalnum()):
        
        print('I')
        
        return

    print('P')

id_validate(input_str)