import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'
import styled from 'styled-components'
import { Header } from '../../../../pages/Shop/Shop'
import ShopForm from '../form/ShopForm'
import ShopItems from '../shop/ShopItems'

export default function AdminShop() {
  return (
    <Container>
      <Header>Products</Header>
      <Tabs>
        <TabList>
          <Tab>Add</Tab>
          <Tab>Edit/Delete</Tab>
        </TabList>

        <TabPanel>
          <ShopForm />
        </TabPanel>

        <TabPanel>
          <ShopItems />
        </TabPanel>
      </Tabs>
    </Container>
  )
}

const Container = styled.main`
`