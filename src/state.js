import { renderTree } from "./render"

let state = {
    friends: [
        {
            id: 555555,
            avatar: "https://sun9-48.userapi.com/c857520/v857520417/fd0a0/n9xTuUgYDW0.jpg",
            name: "Natali",
            subName: "Tonchinskaya",
            birthday: "16.09.1998",
            city: "Minsk",
            education: "POLES",
            webSite: "none"
        },
        {
            id: 444444,
            avatar: "https://sun9-67.userapi.com/snVaIpd4tkeZnbMeYwxEb_9UvCK85_1HsSWeDQ/hHH7iyPTsuU.jpg",
            name: "Daniil",
            subName: "Novikov",
            birthday: "03.04.2004",
            city: "Uva",
            education: "School №2",
            webSite: "none"
        },
        {
            id: 888888,
            avatar: "https://sun9-27.userapi.com/hlnPbOZxLgwg7QoN7mUJLfjt5b1g3CcKLuagWw/7u1IO5zK6mo.jpg",
            name: "Dmitry",
            subName: "Pletnev",
            birthday: "20.04.1999",
            city: "Uva",
            education: "Sharaga",
            webSite: "none"
        }
    ],

    profilePage: {
        posts: [
            {
                id: 1,
                src: "https://im0-tub-ru.yandex.net/i?id=752c84f08c638acfb2b02e2e8b908a89&n=13&exp=1",
                text: "I become the best programmer!",
                likes: 34
            },
            {
                id: 2,
                src: "https://im0-tub-ru.yandex.net/i?id=752c84f08c638acfb2b02e2e8b908a89&n=13&exp=1",
                text: "I love Natalie",
                likes: 42
            }
        ],

        newPostText: "123test"

        ,
    },

    dialogsPage: {
        dialogsData:
            [
                {
                    id: 555555,
                    name: "Natali",
                    ava: "https://sun9-48.userapi.com/c857520/v857520417/fd0a0/n9xTuUgYDW0.jpg"
                },
                {
                    id: 444444,
                    name: "Daniil"
                },
                {
                    id: 7777777,
                    name: "Sergey"
                },
                {
                    id: 222222,
                    name: "Mary"
                },
                {
                    id: 888888,
                    name: "Dmitry"
                }
            ],

        messageData:
            [
                {
                    id: 555555,
                    name: "Natali",
                    src: "https://sun9-48.userapi.com/c857520/v857520417/fd0a0/n9xTuUgYDW0.jpg",
                    message: "Hi, how are you?"
                }
            ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        src: "https://im0-tub-ru.yandex.net/i?id=752c84f08c638acfb2b02e2e8b908a89&n=13&exp=1",
        text: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.messageData = newText
    renderTree(state)
}

export default state