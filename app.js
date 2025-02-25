const express = require('express');
const fs = require('fs');
const app = express();

/**
 * Поиск вхождения (первой найденной) подстроки в (большом) текстовом файле в последних N строках.
 *
 * @param {string} filePath -  Путь файла.
 * @param {number} limit - Максимальное количество строк.
 * @param {string} query - Подстрока.
 * @return {Object} - Результат.
 */
function searchSubstringInLastLines(filePath, limit, query) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');


  for (let i = lines.length - 1, j = 0; i >= 0 && j < limit; i--, j++) {
    if (lines[i].includes(query)) {
      return {
        num: lines.length - i,
        line: lines[i].trim(),
      };
    }
  }

  return { num: 0, line: 'Not found' };
}

app.get('/', (req, res) => {
  const filePath = 'text_file.txt';
  const limit = parseInt(req.query.limit, 10) || 1000;
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  const result = searchSubstringInLastLines(filePath, limit, query);
  res.json(result);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});