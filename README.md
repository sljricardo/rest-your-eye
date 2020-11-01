# rest-your-eye 👁👁

Inspirado na ideia da extensão para o chrome 20-20-20.

Mas dar a possibilidade de ser executada esta funcionalidade mesmo quando não temos o browser aberto

## Utilização
Podemos tirar proveito desta app de várias maneiras, deixo aqui 3 modos.

#### Cron Job
Em ambiente Linux podemos criar um cron job que abre esta página web de X em X minutos

#### Task Scheduler
Em Windows podemos criar um scheduler que irá correr esta pagina no tempo definido

#### Node process 
Está disponível também o script em node que pode ser executado em plano de fundo através do comando:
```bash
node ./script [nome_do_brower_que_queremos_usar]
#exemplo:
node script chromium
```

Se quisermos utilizar esta app como um processo node, podemos editar os minutos de intervalo no ficheiro script.js > var pauseInterval
