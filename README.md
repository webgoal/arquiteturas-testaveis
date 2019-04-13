## Idéia geral da arquitetura

01- Fizemos um monolito sem camadas nem módulos, e já substituímos pelo 02
02- (01_two_layers) Divisão em camadas, dependências seguem o fluxo de controle
03- (todo) Inversão de controle
  a- Containers e Components
  b- Usando um container de injeção de dependência
04- (todo) Criação de módulo node da(s) camadas centrais

### Problemas/pontos de atenção identificados

## NOTA01:

Para que seja possível excutar os testes com fetch real foi necessário importar
o fetch no Repo (o fetch está magicamete disponível no código de produção mas não nos testes)
ref: https://jestjs.io/docs/en/bypassing-module-mocks

## NOTA02:

Expo32 não renderiza a FlatList nos testes do jest. Problema no preset.
https://github.com/expo/expo/issues/2806#issuecomment-465373231
