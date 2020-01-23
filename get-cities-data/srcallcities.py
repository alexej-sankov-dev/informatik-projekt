from srceuropa import getEuropaCities
from srcafrica import getAfricaCities
from srcasia import getAsiaCities
from srcaustralia import getAustraliaCities
from srcnorthamerica import getNorthAmericaCities
from srcsouthamerica import getSouthAmericaCities
from srcdeutschland import getDeutschlandCities

def getAllCities():
    allCities = getEuropaCities() + getDeutschlandCities() + getAfricaCities() + getAustraliaCities() + getAsiaCities() +getNorthAmericaCities() +getSouthAmericaCities()
    return allCities

def main():
    print(getAllCities())
    return 0

if __name__ == '__main__':
    main()