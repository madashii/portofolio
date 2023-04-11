import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({ }: Props) {
    return (
        <header>

            <div className='flex flex-row items-center'>
                <SocialIcon
                    url="https://youtube.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://youtube.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://youtube.com/jaketrent"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </div>

            <div>
            <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p> Get It Touch</p>

            </div>
        </header>

    )
}

export default Header