import React from 'react'
import { Flex, Text, Image, Grid, Button } from 'theme-ui'

import DataTable from 'react-data-table-component'
import { fontWeights } from '@makerdao/dai-ui-theme-maker'

//  Internally, customStyles will deep merges your customStyles with the default styling.
const customStyles = {
  rows: {
    style: {
      minHeight: '62px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      fontWeight: 600,
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
}

const columns = [
  {
    name: 'Theme',
    selector: (row) => row.theme,
  },
  {
    name: 'Personal Inquiry',
    selector: (row) => row.personal,
  },
  {
    name: 'Web3 Enquiry',
    selector: (row) => row.web3,
  },
]

const data = [
  {
    id: 1,
    theme: 'Introduction to Kernel',
    personal: 'The Play of Pattern',
    web3: 'Trust',
  },
  {
    id: 2,
    theme: "Ethereum's History and State",
    personal: 'Meaning',
    web3: 'Value',
  },
  {
    id: 2,
    theme: 'A Global Financial System',
    personal: 'Better Questions',
    web3: 'Money and Speech',
  },
  {
    id: 2,
    theme: 'Take Back The Web',
    personal: 'Intention',
    web3: 'Freedom',
  },
  {
    id: 2,
    theme: 'Internet Age Institutions',
    personal: 'Govern Yourself',
    web3: 'Liberally Radical',
  },
  {
    id: 2,
    theme: 'Tokens and Mechanism Design',
    personal: 'Listening and Stories',
    web3: 'Incentives',
  },
  {
    id: 2,
    theme: 'Scaling Principled Games',
    personal: 'Learn How To Learn',
    web3: 'Censorship Resistance',
  },
  {
    id: 2,
    theme: ' The Gift',
    personal: 'Giving',
    web3: 'Scale-ability',
  },
]

const LearnTable = () => {
  return (
    <Flex
      sx={{
        backgroundColor: 'surfaceAlt',
        borderRadius: 'medium',
        flexDirection: 'column',
        marginX: ['2rem', '2rem', '0rem'],
        // marginTop: ['-2rem', '-4rem'],
      }}>
      <DataTable
        columns={columns}
        data={data}
        theme={'kernel'}
        customStyles={customStyles}
      />
    </Flex>
  )
}

export default LearnTable
