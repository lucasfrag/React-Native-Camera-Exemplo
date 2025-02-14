# 🚀 React Native Camera Exemplo
Aplicativo criado para exemplificar o uso das bibliotecas <b>React Native Camera</b> e <b>React Native CameraRoll</b> em uma aplicação React Native.

### ⚠️ ATENÇÃO!!!
**Este projeto foi desenvolvido como parte de uma atividade educacional e tem fins exclusivamente didáticos.** Não é recomendado utilizá-lo em ambientes de produção.


## Instalação 🚀
1. Clone esse repositório ou faça o download dos arquivos
2. Abra o projeto no Visual Studio Code
3. Abra o Terminal e execute o comando `npm install` para instalar os módulos do Node.
4. Execute o projeto com `react-native run-android`
5. Enjoy!

## React Native Camera ⚠️
Desde 2021, o projeto React Native Camera tem encontrado dificuldades em manter-se atualizado ao mesmo tempo que buscava solucionar os problemas identificados pelos usuários. 
Apesar da contribuição dos usuários para manterem a biblioteca viva, em 3 de janeiro de 2022 o projeto foi oficialmente descontinuado.

Após realizar alguns testes com diferentes versões da biblioteca, conclui que a melhor versão para ser utilizada é a <b>3.44.3</b>.
Até essa versão, a biblioteca consegue acessar a câmera e captura imagens perfeitamente. A partir da versão seguinte, <b>4.0.0</b>, a biblioteca começou a apresentar instabilidades por conta da migração parao Kit de Machine Learning da Google no Android.

### Versões do React Native Camera testadas 📝
Os resultados obtidos ao testar a biblioteca em cada versão foram:

- Versão 4.2.1: nessa versão, a visualização da câmera foi desabilitada. Porém, o aplicativo não é mais encerrado ao abrir o app. ❌
- Versão 4.2.0 ❌
- Versão 4.1.1 ❌
- Versão 4.1.0 ❌
- Versão 4.0.0: a partir dessa versão até a v4.2.0, o aplicativo é encerrado assim que ele é aberto. ❌
- Versão 3.44.3: câmera funcionando! ✔️

### Criando um novo projeto com React Native Camera 📁
Todas as versões foram testadas na arquitetura de 2022 do React Native <b>(versão 0.67)</b> e também na antiga arquitetura <b>(versão 0.66)</b>.
Ambas arquiteturas apresentaram o mesmo resultado.

Caso você deseje iniciar um projeto novo e seguir o processo de instalação descrito na documentação do projeto, sugiro que instale a biblioteca inserindo o seguinte trecho no arquivo `package.json`:
`"react-native-camera": "3.44.3"` e, após isso, execute o comando `npm install`.

Se você fizer a instalação via comando `npm install react-native-camera --save`, será necessário remover a biblioteca da pasta `node_modules` e mudar a versão da biblioteca nos arquivos `package.json` e `package-lock.json`, e só então executar o comando `npm install`.
Outra alternativa, seria apontar o número da versão no comando `npm install`.

## React Native CameraRoll ✔️
A biblioteca foi testada na versão mais atualizada até então <b>(V4.1.2)</b> e não apresentou nenhum problema no uso.

## Capturas de tela 📸
<img width="300" src="https://github.com/lucasfrag/React-Native-Camera-Exemplo/blob/master/Screenshots/02.png" >

## Desenvolvido com... 👨‍💻

* [React Native](https://reactnative.dev)
* [React Native Camera](https://react-native-camera.github.io/react-native-camera/docs/installation)
* [React Native CameraRoll](https://github.com/react-native-cameraroll/react-native-cameraroll)

## Vídeo tutorial no YouTube ▶️
- React Native Camera - Instalação, configuração e uso da biblioteca: https://youtu.be/8dGiP6EXcJQ?si=Q6Yl8Rt-9jTLAd8M
- React Native Camera - Corrigindo erro "deprecated-react-native-prop-types": https://youtu.be/_ASMHMkQysk?si=g-OG6xQguYMD2qFs
- React Native CameraRoll - Instalação, configuração e uso da biblioteca: https://youtu.be/_3Ms_OtIvSg?si=Ps-xZgou5aE7wMVB

