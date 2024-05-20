
# Unique Integers Processing Application - Programming Assignment 1

 # Introduction
This README provides an overview of the solution for Programming Assignment 1 - Unique Integers. The assignment requires implementing a program to read a list of integers from an input file, generate an output file containing a list of unique integers present in the input file, and handle various input variations.

This application processes input files containing lists of integers and generates output files containing unique integers in sorted order.

## How to Run the Application
1. **Clone the repository**:
 
   git clone https://github.com/nellyiya/Asignment.git

3. **Installation**:
   - Ensure you have Node.js installed on your system. You can download it from [Node.js website](https://nodejs.org/).

4. **Setup**:
   - Clone or download the repository containing the application code.

5. **Installation of Dependencies**:
   - Open a terminal or command prompt.
   - Navigate to the directory containing the application code.
   - Run the following command to install dependencies:
     ```
     npm install
     ```

6. **Execution**:
   - After installing dependencies, run the application using the following command:
     ```
     node processor.js
     ```

7. **Sample Input Data**:
   - Place your input files in the `sample_inputs` directory.

8. **Viewing Results**:
   - Once the application has finished processing, you can find the output files in the `results` directory.
   - Each output file will contain a list of unique integers from the corresponding input file, sorted in increasing order.

## Code Structure

The code consists of a JavaScript class named `UniqueInt`, responsible for processing input files and generating output files with unique integers. The main functionalities of the class include reading input files, extracting unique integers, sorting them, and writing them to output files.

### Functions Implemented:

- `processFile(inputFilePath, outputFilePath)`: Processes the input file and generates the output file with unique integers.
- `readUniqueIntegers(inputFilePath)`: Reads the input file, extracts unique integers, and returns them.
- `isValidIntegerLine(line)`: Checks if a line from the input file contains a valid integer.
- `sortUniqueNumbers(numbers)`: Sorts the unique integers in ascending order.
- `writeUniqueIntegers(uniqueNumbers, outputFilePath)`: Writes the sorted unique integers to the output file.

### Sample Data

- Sample input files should be placed in the `sample_inputs` directory.
- Output files will be generated in the `results` directory, following the naming convention: `<input_file_name>_results.txt`.

## Note

- Ensure proper organization of input and output directories as specified in the instructions.
- The application handles various variations in the input file format, such as whitespace, empty lines, and non-integer inputs.

Feel free to reach out for any queries or clarifications regarding the implementation.
Email n.iyabikoze@alustudent.com

---
