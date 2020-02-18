from doubles import addImageURL

def main():
    FOUT = open("output.txt", "w")
    cities = addImageURL()
    for city in cities:
        str1 = '{"index": '+ str(city[0]) + ', "name": "'+str(city[1])+'", "population": '+ str(city[2]) + ', "country": "'+str(city[3])+ '", "image": "'+str(city[4])+'"},'    
        FOUT.write(str1+'\n')




    FOUT.close()
    return 0

if __name__ == '__main__':
    main()