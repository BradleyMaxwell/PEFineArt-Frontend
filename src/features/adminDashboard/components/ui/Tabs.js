import React, { useState } from 'react'
import styled from 'styled-components'
import '../../assets/adminStyles.css'

export default function Tabs({ children }) {

  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (index) => {
    setActiveTab(index)
  }

  // create the tabs at the top of the component

  const tabs = children.map((child, index) => (
    <TabButton key={index} onClick={() => changeTab(index)} className={activeTab === index ? 'tab-button active-tab' : 'tab-button'}>
      <TabBorder className="tab-border" />
      <h4>{child.props.title}</h4> 
    </TabButton>
  ))

  // create the content of the different tabs

  const contents = children.map((child, index) => (
    <TabContent key={index} className={activeTab === index ? 'tab-content active-tab-content' : 'tab-content'}>
      {child}
    </TabContent>
  ))

  return (
    <div>
        <TabContainer>
          {tabs}
        </TabContainer>

        <div className='center-content-x'>
          {contents}
        </div>
    </div>
  )
}

const TabContainer = styled.div`
  border-top: 1.5px solid var(--theme-feint-darkgrey);
  border-bottom: 1.5px solid var(--theme-feint-darkgrey);
  display: flex;
  width: 100vw;
` 
const TabButton = styled.button`
  background-color: white;
  border-style: none;
  flex: 1;
  padding: 1rem 0;
  position: relative;
`
const TabBorder = styled.span`
  border-bottom: 1.5px solid transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
`

const TabContent = styled.div`
  display: none;
  padding: 2rem;
  width: 100%;
`

const TabContentHeader = styled.h1`
  text-align: center;
  margin: 2rem;
`