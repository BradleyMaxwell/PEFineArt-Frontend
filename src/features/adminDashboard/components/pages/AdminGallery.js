import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import GalleryForm from '../form/GalleryForm';
import '../../assets/adminStyles.css'
import AdminGalleries from '../gallery/AdminGalleries';
import ArtworkForm from '../form/ArtworkForm';

export default function AdminGallery() {
  return (
    <Container>
      <h2>Galleries</h2>
      <Tabs>
        <TabList>
          <Tab>Add Gallery</Tab>
          <Tab>Add Artwork</Tab>
          <Tab>Edit/Delete</Tab>
        </TabList>

        <TabPanel>
          <GalleryForm />
        </TabPanel>

        <TabPanel>
          <ArtworkForm />
        </TabPanel>

        <TabPanel>
          <AdminGalleries />
        </TabPanel>
      </Tabs>
    </Container>
  )
}

const Container = styled.main`
  h2 {
    margin: 50px 0 20px 0;
    text-align: center;
  }
`