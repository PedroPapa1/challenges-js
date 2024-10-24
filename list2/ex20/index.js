const INSS_DEDUCTION = 0.12;

import fs from 'fs';
import csv from 'csv-parser';

const results = [];

export function payrollReport() {
  fs.createReadStream('ex20/employees_data_final.csv')
  .pipe(csv())
  .on('data', (data) => {
      const salaryDeduction = data['Gross Salary'] * INSS_DEDUCTION;
      const netSalary = data['Gross Salary'] - salaryDeduction;

      results.push({
          registrationNumber: data['Registration Number'],
          name: data['Name'],
          grosSalary: data['Gross Salary'],
          salaryDeduction: salaryDeduction.toFixed(2),
          netSalary: netSalary.toFixed(2),
      });
  })

  .on('error', (error) => {
      console.log(`Error: ${error}`);
  })
  
  .on('end', () => {
      results.forEach(result => {
          console.log(`Registration Number: ${result.registrationNumber}`);
          console.log(`Name: ${result.name}`);
          console.log(`Gross Salary: $${result.grosSalary} dollars.`);
          console.log(`INSS Deduction: $${result.salaryDeduction} dollars.`);
          console.log(`Net Salary: $${result.netSalary} dollars.`);
          console.log('--------------------------------------------------');
      });
  });
}
payrollReport();

