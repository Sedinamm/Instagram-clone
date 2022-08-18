import {USERS} from './users'

export const POSTS =[
    {
        imageUrl: 'https://www.whatsappimages.in/wp-content/uploads/2021/12/Best-Minions-Whatsapp-Dp-Profile-Images-photo-download.jpg',
        user:USERS[0].user,
        likes: 53800,
        caption: 'Allow me to reintroduce myself',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'deladem',
                comment: 'Step on us ma',
            },
            {
                user: 'selorm',
                comment: 'you are not nice',
            },
        ],
    },
    // {
    //     imageUrl: 'https://www.whatsappimages.in/wp-content/uploads/2021/12/Best-Minions-Whatsapp-Dp-Profile-Images-photo-download.jpg',
    //     user:USERS[0].user,
    //     likes: 53800,
    //     caption: 'Chale Chale',
    //     profile_picture: USERS[0].image,
    //     comments: [
    //         {
    //             user: 'deladem',
    //             comment: 'you see what you dey do for here',
    //         },
    //         {
    //             user: 'selorm',
    //             comment: 'Ala woyo',
    //         },
    //     ],
    // },
]