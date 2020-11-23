import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
  {
    icons : <GiEarthAmerica css={`color: #06c475;`}/>,
    title : 'Over 100 Destinations',
    desc: 'Travel to over 100 unique places',
  },
  {
    icons : <MdAirplanemodeActive css={`color: #c45602;`}/>,
    title : '1 millon trips made',
    desc: 'Over I million trips completed this year',
  },
  {
    icons : <MdTimer css={`color: #07afb5;`}/>,
    title : 'Fastest support',
    desc: 'Aceess our support team 24/7',
  },
  {
    icons : <FaMoneyCheck css={`color: #bf081a;`}/>,
    title : 'Best deals',
    desc: 'We offer the best prices',
  },
]