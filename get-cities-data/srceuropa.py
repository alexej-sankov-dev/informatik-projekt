#!/usr/bin/python3
import math

def getEuropaCities():
    FIN  = open("data/europa.txt",  "r")
    #FOUT = open("cities2.txt", "a")

    InputData = FIN.read().split('\n')

    citydata = []
    for string in InputData:
        arr = string.split('\t')
        num = "".join(arr[2].split('.'))

        filteredArr = [int(arr[0]), arr[1].strip(), int(num), arr[6].strip()]

        citydata.append(filteredArr)

    # for city in citydata:
    #     string =''
    #     for x in city:
    #         string+=str(x)+','
    #         #print(str(x)+',', file = FOUT)
    #     FOUT.write(string)

    #    FOUT.write('\n')

        
    FIN.close()
    #FOUT.close()

    return citydata

def main():
    
    print(getEuropaCities())
    return 0

if __name__ == '__main__':
    main()

