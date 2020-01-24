from doubles import getUniqueCities

def main():
    print(getUniqueCities())

    cities = getUniqueCities()

    for city in cities:
        str = '{"index": '+ str(city[0]) + ', "name": "'+city[1]+'", "population": '+ str(city[2]) + ', "country": "'+city[3]+'"},'
        print()
    return 0

if __name__ == '__main__':
    main()