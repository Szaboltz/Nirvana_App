// Importa o React, e seu componente principal
import React, { Component } from 'react'; 
// Tem que exportar os componentes usados no código, que já existem no react
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'gh repo clone Szaboltz/Nirvana_App-native';

// Criar o componente principal do projeto
export default class Projeto extends Component {

   // Habilitar a alteração das props por meio das states
  constructor(props){
    super(props); //Props é um dos componentes pré criados do React, tanto que nem importamos ele.
    this.state = {imagem: 'smile.png', texto: 'Logo da banda'}; // Definição das states, que é a mesma que variáveis - Aqui definimos o valor dela a imagem smile, o valor padrão dela é a imagem

    // Habilitar a alteração dos valores das states pela função mudarImagem, ou seja a função irá mudar o valor da state
    this.mudarImagemG = this.mudarImagemG.bind(this); 
    this.mudarImagemB = this.mudarImagemB.bind(this);
    this.mudarImagemBT = this.mudarImagemBT.bind(this);
    this.mudarImagemGB = this.mudarImagemGB.bind(this);
  }

  // Quando o botão é pressioando, essa função função acontece 
  mudarImagemG(){
    let s = this.state; // Varíavél que recebe o valor padrão da state
    s.imagem = 'kurt.jpg' // Variável que recebe a imagem 'kurt.jpg'
    s.texto = 'Kurt Cobain' // Variável que recebe o texto 'Kurt Cobain'
    this.setState(s) // Substituição do novo valor a state
  }

  mudarImagemB(){
    let s = this.state; // Varíavél que recebe o valor padrão da state
    s.imagem = 'krist.png' // Variável que recebe a imagem 'krist.jpg'
    s.texto = 'Krist Novoselic' // Variável que recebe o texto 'Krist Novoselic'
    this.setState(s) // Substituição do novo valor a state
  }

  mudarImagemBT(){
    let s = this.state; // Varíavél que recebe o valor padrão da state
    s.imagem = 'dave.png' // Variável que recebe a imagem 'dave.jpg'
    s.texto = 'Dave Grohl' // Variável que recebe o texto 'Dave Grohl'

    this.setState(s) // Substituição do novo valor a state
  }

  mudarImagemGB(){
    let s = this.state; // Varíavél que recebe o valor padrão da state
    s.imagem = 'pat.jpg' // Variável que recebe a imagem 'pat.jpg'
    s.texto = 'Pat Smear' // Variável que recebe o texto 'Pat Smear'

    this.setState(s) // Substituição do novo valor a state
  }

  render(){ // Usado para rederizar o conteúdo na tela do usuário
    return( // Retorna todo o conteúdo do render 
      <View style={styles.body}> {/* View principal do projeto, aqui vai todos os outros componentes que serão usados no projeto */}

        <Image style={styles.logo} source={require('./img/nirvana_logo.png')}/> {/* A imagem logo do código - Essa tag tem fechamento nela mesma e está usando o componente style para estilização */}

        <View>
          <Text style={styles.titulo}>Escolha uma das opções</Text> {/* Texto título do código */}
        </View>

          {/* Parte principal do código - Aqui estão os botões que serão associados a função onPress, ao pressionar o botão algo acontecerá. */}
          <View style={styles.cima}> {/* TouchableOpacity é um tipo de botão que permite várias estilos */}
            <TouchableOpacity style={styles.botao} title="Guitarrista" onPress={this.mudarImagemG}><Text>Guitarrista</Text></TouchableOpacity> {/* A função onPress recebe a função criada pelo programador 'mudarImagemG' */}
            <TouchableOpacity  style={styles.botao} title="Baixista" onPress={this.mudarImagemB}><Text>Baixista</Text></TouchableOpacity> {/* A função onPress recebe a função criada pelo programador 'mudarImagemB' */}
            <TouchableOpacity style={styles.botao} title="Baterista" onPress={this.mudarImagemBT}><Text>Baterista</Text></TouchableOpacity> {/* A função onPress recebe a função criada pelo programador 'mudarImagemBT' */}
            <TouchableOpacity  style={styles.botao} title="Guitarrista Base" onPress={this.mudarImagemGB}><Text>Guitarrista base</Text></TouchableOpacity> {/* A função onPress recebe a função criada pelo programador 'mudarImagemGB' */}
          </View>
      
        <View style={styles.photo}>
          <Image style={styles.smile} source={require('./img/' + this.state.imagem)}/> {/* A imagem que vai ser substituida é concatenada ao valor padrão da state */}
        </View>

        <View>
          <Text style={styles.pe}>{this.state.texto}</Text> {/* O texto que vai ser substituido por um novo texto pela função */}
        </View>
       
      </View> // Fim da View principal do código
    );
  }
}

const styles = StyleSheet.create({ // Constante do grupo de estilos, que permitirá estilizar o código
  body:{ // Estilo da View principal do código
    paddingTop: 45, // Distância com o topo da página
    backgroundColor: '#000000', // Muda a cor de fundo
    flex: 3, // Fornece o mesmo espaço a todos os elementos do código
    alignItems: 'center', // Pega todos os itens e alinha no centro
    flexDirection: 'column', // Pega todos os itens e os alinha em coluna

  },
   logo:{ // Estilo da logo da página
    height: 100, // Altera a altura da imagem
    width: 300, // Altera a largura da página
    marginTop: 10, // Distância da imagem com o topo da página
    zIndex:0 

  },
  titulo:{ // Estilo di texto título da página
    padding: 20, // Distância do texto com a imagem 
    color: '#ffffff', // Cor do texto
    fontSize: 20, // Tamanho da fonte

  },
  cima:{ // Estilo da view dis botões
    flexDirection: 'row', // Deixa todos os elementos da view em linha

  },
  botao:{ // Estilo dos botões
    alignContent: 'space-around', // Aplica a mesma distância entre os botões e o restante da página
    backgroundColor: '#1e90ff', // Cor do botão
    borderRadius: 100, // Deixa a borda do botão redonda
    padding: 10,
    margin: 10, // espaço entre os botões
    fontFamily: 'arial', // Tipo de fonte
    fontSize: 40 // Tamanho da fonte
  },
  smile:{ // Estilo da imagem que  será alterada
    height: 300, // Altera a altura da imagem
    width: 300, // Altera a largura da página
    marginTop: 10, // Distância da imagem com o topo da página
    zIndex:0,
    alignItems: 'flex-end', // Deixa a imagem no fim da página

  },
  photo:{ // Estilo da view da imagem que vai ser alterada
    padding: 40 // Distância da imagem com o elemento de cima

  },
  pe:{ // Estilo do texto do fim da página
    color: '#ffffff', // Cor da fonte
    fontSize: 18 // Tamanho da fonte
  }
})