test/
|-- app.js
|-- README.md
|-- text_file.txt

# Поиск подстроки

HTTP server для поиска подстроки в строке

## Requirements

- установка 'npm i'

## Запуск

1. Используйте текстовый файл `text_file.txt`.
2. Запустите сервер: node app.js
3. Отправьте запрос `curl`:
Такой: curl http://127.0.0.1:3000/?limit=1000&query=code
или такой, если не работает первый: curl -G http://127.0.0.1:3000/ --data-urlencode "limit=1000" --data-urlencode "query=code"

## Результат
```json
{
  "num": 1,
  "line": "0xdeadcode"
}

```