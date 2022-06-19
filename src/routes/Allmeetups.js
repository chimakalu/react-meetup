import React from 'react';

/* ----------------- dummy data to simulate the meetup data ----------------- */
const DUMMY_DATA = [
    {
      "id": "62ae663a4ad0ca0a64c6b8a5",
      "title": "This is the first Meetup",
      "image": "http://placehold.it/32x32",
      "address": "833 Monitor Street, Tryon, Mississippi, 2201",
      "about": "Nostrud veniam reprehenderit officia velit ipsum id deserunt sunt Lorem cupidatat esse incididunt culpa labore. Tempor dolor laborum ea in exercitation ullamco mollit occaecat aliquip. Mollit proident non veniam aute cillum nulla exercitation incididunt incididunt laboris. Eiusmod mollit ipsum anim aliquip enim reprehenderit aute. Reprehenderit aute aliqua fugiat occaecat pariatur minim ex Lorem in labore. Cillum do adipisicing nulla aute exercitation amet anim occaecat in est.\r\n"
    },
    {
      "id": "62ae663a7fe0b54e88699449",
      "title": "This is another awesome Meetup",
      "image": "http://placehold.it/32x32",
      "address": "635 Windsor Place, Condon, District Of Columbia, 5307",
      "about": "Id nisi dolor reprehenderit aliqua commodo ad magna enim nulla enim. Cupidatat consequat Lorem laboris cillum consectetur. Non eu esse nostrud eu ea sunt qui in aliqua officia fugiat ullamco do. Qui excepteur exercitation tempor quis non aliquip commodo incididunt. Sit cillum elit nisi est esse amet elit Lorem laboris excepteur. Aliquip id commodo laboris ea deserunt amet eiusmod id commodo. Minim pariatur tempor reprehenderit cillum ad consequat dolor veniam consequat sunt duis.\r\n"
    }
];

const AllMeetups = () => {
    return (
        <div className='content-main-wrapper'>
            <h1>All Meetups</h1>
            <ul className='mt20'>
                {DUMMY_DATA.map((meetups) => {
                    return (
                        <li key={meetups.id}>{meetups.title}</li>
                    );
                })}
            </ul>
        </div>
    )
}

export default AllMeetups;