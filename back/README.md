# BackEnd

## Need package

### eslint + prettier (airbnb)
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint // 단 8.22.0 -> Webstorm 2022.3 버전은 eslint 오류가 있어서 그렇다. 버전이 높거나 다른 IDE를 사용한다면 문제없음.
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- prettier

### jest
- jest
- @types/jest
- ts-jest

## Package.json scripts

- test: jest
- lint: eslint '.src/** /*.{ts,tsx,js,jsx}'
- lint:fix: eslint --fix '.src/** /*.{ts,tsx,js,jsx}'
