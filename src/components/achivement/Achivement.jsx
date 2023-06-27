import React, { useState } from 'react';
import './Achivement.css';
import Img1 from '../../assets/UNICEF.jpg';
import Img2 from '../../assets/Coding Ninjas Campus Program.png';
import Img3 from '../../assets/Internshala Campus Program.jpg';
import Img4 from '../../assets/Twitter UI Clone.jpg';
import Img5 from '../../assets/Hacker Rank C++.jpg';
import Img6 from '../../assets/projectImg1.jpg';
import { AiFillCloseSquare } from 'react-icons/ai';
import {AiFillTrophy} from 'react-icons/ai';

const data = [
    {
        id: 1,
        image: Img1,
        title: 'Got seleted as a member of UNICEF Campus Knowledge Initiative from my campus with other 10 members. where have to work together to solve Social issues.',
        post: 'https://www.linkedin.com/posts/jaydeep-sathwara_excited-to-have-completed-the-unicef-campus-activity-7062476831291023360-EnSL?utm_source=share&utm_medium=member_desktop',
        btnText: 'Check LinkedIn'
    },
    {
        id: 2,
        image: Img2,
        title: 'Got a chance to represent Coding Ninjas at my campus',
        demo: 'https://www.linkedin.com/posts/jaydeep-sathwara_coding-codingninjas-opportunity-activity-7026962254986162176-nB5p?utm_source=share&utm_medium=member_desktop',
        btnText: 'Check LinkedIn'
    },
    {
        id: 3,
        image: Img3,
        title: 'Got a chance to represent Internshala at my campus',
        demo: 'https://www.linkedin.com/posts/jaydeep-sathwara_internshalastudentpartner-internshala-internshalaincampus-activity-7007042934017552384-YPhz?utm_source=share&utm_medium=member_desktop',
        btnText: 'Check LinkedIn'
    },
    {
        id: 4,
        image: Img4,
        title: 'Attended Coding Ninjas Workshop on Building Twitter UI using react',
        demo: 'https://jaydeep-agriculture.netlify.app',
        btnText: 'Check LinkedIn'
    },
    {
        id: 5,
        image: Img5,
        title: 'Have 4⭐ Rating in C++ At Hacker Rank',
        demo: 'https://www.hackerrank.com/jaydeepsathwara1?hr_r=1',
        btnText: 'Hacker Rank'
    }
    // {
    //     id: 6,
    //     image: Img6,
    //     title: 'Project Title',
    //     demo: 'https://jaydeep-agriculture.netlify.app',
    //     btnText: 'Check LinkedIn'   
    // }
]

const Achivement = () => {
    const [showImg, setShowImg] = useState('');

    return (
        <section id='achieve'>
            <h5>Certificates</h5>
            <h2>Achievements <AiFillTrophy /></h2>

            <div className="container achievement_container">
                {
                    data.map(({ id, image, title, post, btnText }) => {
                        return (
                            <article key={id} className='achievement_item'>
                                <div className="achievement_img">
                                    <img onClick={(e) => setShowImg({ image })} src={image} alt="Project Images" />
                                </div>
                                <h4>{title}</h4>
                                <div className="achievement_btn">
                                    <a href={post} className='btn btn-primary' target='_blank'><b>{btnText}</b></a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            {showImg && (
                <div className="show_img">
                    <div className="close_img" onClick={() => setShowImg('')}>
                        <AiFillCloseSquare />
                    </div>
                    <img src={showImg.image} alt="Image You Have Clicked On" />
                </div>
            )}
        </section>
    )
}

export default Achivement