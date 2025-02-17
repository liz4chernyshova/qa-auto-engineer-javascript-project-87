install:
	npm install

run:
	./gendiff.js -h

lint:
	npx eslint .

gendiff:
	node bin/gendiff.js
