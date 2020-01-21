#!/usr/bin/python3
import math


def main():
    FIN  = open("europa.txt",  "r")
    FOUT = open("output.txt", "w")

    InputData = FIN.read().split('\n')

    #print(InputData)
    
    print(0, file = FOUT)
    citydata = []
    for string in InputData:
        arr = string.split('\t')
        num = "".join(arr[2].split('.'))

        filteredArr = [int(arr[0]), arr[1], int(num), arr[6]]

        citydata.append(filteredArr)

    #for string in citydata:
     #   arr2 = string.split()
    print(citydata)

    print(len(citydata))
    FIN.close()
    FOUT.close()

    return 0

if __name__ == '__main__':
    main()

