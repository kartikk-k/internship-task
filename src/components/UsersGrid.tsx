import React from 'react'
import Image from 'next/image'
import ParadigmLogo from '../../public/media/brand-logos/Paradigm.svg'
import ReciprocalLogo from '../../public/media/brand-logos/Reciprocal.svg'
import SinoCapitalLogo from '../../public/media/brand-logos/sinoGlobal.svg'
import CMSLogo from '../../public/media/brand-logos/CMS.svg'
import SolanaLogo from '../../public/media/brand-logos/solanaventures.svg'
import ParafiLogo from '../../public/media/brand-logos/parafi.svg'
import KeneticLogo from '../../public/media/brand-logos/kenetic.svg'
import StableNodeLogo from '../../public/media/brand-logos/stableNode.svg'

function UsersGrid() {
    return (
        <div className='flex items-center w-full gap-8 px-4 my-10 opacity-60'>
            <Image src={ParadigmLogo} alt='Paradigm' />
            <Image src={ReciprocalLogo} alt='reciprocal' />
            <Image src={SinoCapitalLogo} alt='Sino capital' />
            <Image src={CMSLogo} alt='CMS Capital' />
            <Image src={SolanaLogo} alt='Solana' />
            <Image src={ParafiLogo} alt='Parafi' />
            <Image src={KeneticLogo} alt='Kenetic' />
            <Image src={StableNodeLogo} alt='Stable Node' />
        </div>
    )
}

export default UsersGrid