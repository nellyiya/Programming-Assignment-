const fs = require('fs');
const path = require('path');

class UniqueInt {

    constructor() {
        this.seen = new Array(2047).fill(false); // Boolean array for integers from -1023 to 1023
        this.minInt = -1023;
    }

    processFile(inputFilePath, outputFilePath) {
        // Reset seen array for each file
        this.seen = new Array(2047).fill(false);
        const uniqueNumbers = this.readUniqueIntegers(inputFilePath);
        this.writeUniqueIntegers(uniqueNumbers, outputFilePath);
    }

    readUniqueIntegers(inputFilePath) {
        const uniqueNumbers = [];
        const data = fs.readFileSync(inputFilePath, 'utf8');
        const lines = data.split('\n');
        
        for (let line of lines) {
            const strippedLine = line.trim();
            if (strippedLine) {
                if (this.isValidIntegerLine(strippedLine)) {
                    const number = parseInt(strippedLine, 10);
                    if (-1023 <= number && number <= 1023) {  // Ensure the number is within range
                        if (!this.seen[number - this.minInt]) {
                            this.seen[number - this.minInt] = true;
                            uniqueNumbers.push(number);
                        }
                    } else {
                        console.log(`Number out of range: ${number}`);
                    }
                }
            }
        }
        return this.sortUniqueNumbers(uniqueNumbers);
    }

    isValidIntegerLine(line) {
        return !isNaN(line) && Number.isInteger(parseFloat(line));
    }

    sortUniqueNumbers(numbers) {
        if (!numbers.length) return numbers;

        // Bubble Sort for simplicity
        const n = numbers.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                }
            }
        }
        return numbers;
    }

    writeUniqueIntegers(uniqueNumbers, outputFilePath) {
        const data = uniqueNumbers.join('\n');
        fs.writeFileSync(outputFilePath, data);
    }
}

const inputFolder = './sample_inputs';
const outputFolder = './results';

const uniqueIntProcessor = new UniqueInt();

fs.readdirSync(inputFolder).forEach((filename) => {
    if (filename.endsWith('.txt')) {
        const inputPath = path.join(inputFolder, filename);
        const outputPath = path.join(outputFolder, `${filename}_results.txt`);

        // Timing for each file
        const startTime = Date.now();
        uniqueIntProcessor.processFile(inputPath, outputPath);
        const endTime = Date.now();

        console.log(`Processed ${filename} in ${(endTime - startTime) / 1000} seconds`);
    }
});

