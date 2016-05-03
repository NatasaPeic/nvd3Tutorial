"""
    This module converts data from CSV format to JSON
"""
import json
import csv

def main():
    # Open the csv file
    infile = open('data/data.csv', 'r')
    
    #Create a list to store the data
    items = []    
    #Set the field names (headers)
    headers = ["Class_id","Alcohol","Malicacid","Ash","Alcalinity_of_ash",
               "Magnesium","Total_phenols","Flavanoids","Nonflavanoid_phenols",
               "Proanthocyanins","Color_intensity","Hue",
               "OD280_OD315_of_diluted_wines","Proline"]
    # Create a CSV reader
    reader = csv.DictReader(infile, fieldnames=headers)

    # Put the data into the list of items
    for row in reader:
        items.append(row)

    
    # Create and output file and write the data to it
    with open('zevel.json', 'w') as outfile:
        json.dump(items, outfile)


if __name__ == '__main__':
    main()
