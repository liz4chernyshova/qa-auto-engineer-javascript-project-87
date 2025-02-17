### Hexlet tests and linter status:
[![Actions Status](https://github.com/liz4chernyshova/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/liz4chernyshova/qa-auto-engineer-javascript-project-87/actions)

## Проект: "Вычислитель отличий"

### Описание ###

Gendiff - утилита, определяющая разницу между двумя структурами данных. Утилита может работать с json и yaml/yml файлами. По умолчанию используется формат вывода разницы 'stylish'. Для другого формата вывода используйте флаг `-f` или `--format`.

### Для установки и запуска проекта выполните следующее: ###

1. Установите пакет:
   `npm install .`

2. Справочная информация по утилите:
   `gendiff -h`

3. Сравнение файлов:
   `gendiff filepath1.yml filepath2.yml`

4. Плоский формат:
   `gendiff --format plain filepath1.json filepath2.json`

5. JSON-формат:
   `gendiff --format json filepath1.json filepath2.json`

[![asciicast](https://asciinema.org/a/zXGOD0PbtZ1De0Ru0ZI72cL56.svg)](https://asciinema.org/a/zXGOD0PbtZ1De0Ru0ZI72cL56)
