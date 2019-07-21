/**
 * Arquivo exemplo, seria o que substituiria o arquivo "actions" que importamos
 * nos componentes react.
 * Este arquivo basicamente inicia todos os objetos que criamos,
 * nos testes usamos mocks para ter chamadas fáceis de prever o resultado,
 * aqui usamos as implementações reais.
 * Como este arquivo só inicializa objetos, não temos lógica, não precisamos
 * de um teste pra ele. Seria possível criar um teste de integração, eventualmente
 * fazendo chamadas reais no backend, mas o ganho de cobertura com este teste seria mínimo.
 * 
 * Lembrando que desta forma estamos criando tudo do zero, aproveitando apenas o "fetch".
 * Uma alternativa mais simples para começar a desenvolver com testes unitários
 * seria usar uma biblioteca que suporte e incentive o uso de testes automatizados.
 */

// para o token seria melhor usar o SecureStore, ao invés do AsyncStorage,
// mas por simplicidade ficou o AsyncStorage
import { AsyncStorage } from 'react-native';

import { ApplicationUseCases } from './ApplicationUseCases'
import { GoogleAccountsRepository } from './GoogleAccountsRepository'
import { GoogleRepository } from './GoogleRepository'

// aqui em produção, fetch já está definido globalmente, só chamar...
let googleAccountsRepository = new GoogleAccountsRepository(fetch)
let googleRepository = new GoogleRepository(fetch)

export const applicationUC = new ApplicationUseCases(AsyncStorage, googleAccountsRepository, googleRepository)
