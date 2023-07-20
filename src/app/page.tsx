'use client'

import TopBox from '../components/topBox'
import ChartBox from '../components/chartBox'
import PieChartBox from '@/components/pieCartBox'
import BigChartBox from '@/components/bigChartBox'
import BarChartBox from '../components/barChartBox'
import Menu from '../components/menu'

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from '../data';

import { 
  Container,
  Contents,
  MenuContainer,
  ContentsAsside,
  HomeContainer, 
  Box,
  Box1,
  Box2, 
  Box3, 
  Box4, 
  Box5, 
  Box6, 
  Box7, 
  Box8, 
  Box9, 
} from '../styles/home'

export default function Home() {
  return (
    <Container>
      <Contents>
        <div className='menuBar'>
          <MenuContainer>
            <Menu />
          </MenuContainer>
        </div>
        <ContentsAsside>
          <HomeContainer>
            <Box1>
              <TopBox/>
            </Box1>
            <Box2>
              <ChartBox {...chartBoxUser}/>
            </Box2>
            <Box3>
              <ChartBox {...chartBoxProduct}/>
            </Box3>
            <Box4>
              <PieChartBox />
            </Box4>
            <Box5>
              <ChartBox {...chartBoxConversion} />
            </Box5>
            <Box6>
              <ChartBox {...chartBoxRevenue} />
            </Box6>
            <Box7>
              <BigChartBox />
            </Box7>
            <Box8>
              <BarChartBox {...barChartBoxVisit}/>
            </Box8>
            <Box9>
              <BarChartBox {...barChartBoxRevenue}/>
            </Box9>
          </HomeContainer>
        </ContentsAsside>
      </Contents>
    </Container>
  )
}
