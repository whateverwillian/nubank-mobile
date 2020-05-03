import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/Header'
import Tabs from '../../components/Tabs'

import { 
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles';

export default function Main() {
  return (
    <>
      <Container>
        <Header />

        <Content>
          <Card>
            <CardHeader>
              <Icon name='attach-money' size={28} color='#666'/>
              <Icon name='visibility-off' size={28} color='#666'/>
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponivel</Title>
              <Description>R$ 1.000.023,54</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00 recebida de Karina Quintanilha hoje as 6h00.
              </Annotation>
            </CardFooter>
          </Card>
        </Content>

        <Tabs />
      </Container>
    </>
  )
}
