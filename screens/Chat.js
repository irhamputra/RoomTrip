import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

const ListsChat = [
    {
        name: 'Putri K',
        avatarURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        chat: [
            {
                createdAt: new Date().getTime(),
                message: 'Good thank you and see you soon!'
            }
        ],
        primary: true
    },
    {
        name: 'Budi Susanto',
        avatarURL:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80',
        chat: [
            {
                createdAt: new Date().getTime(),
                message: 'You are welcome!'
            }
        ],
        primary: false
    },
    {
        name: 'Andi M',
        avatarURL:
            'https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        chat: [
            {
                primary: false,
                createdAt: new Date().getTime(),
                message: 'Good thank you and see you soon!'
            }
        ]
    },
    {
        name: 'Bagus',
        avatarURL:
            'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        chat: [
            {
                primary: false,
                createdAt: new Date().getTime(),
                message: 'Wow thank you that is so nice!'
            }
        ],
        primary: false
    },
    {
        name: 'Irham P',
        avatarURL:
            'https://miro.medium.com/max/3150/1*OFD5TyL2wPsOHVRuBEDgnQ@2x.jpeg',
        chat: [
            {
                primary: false,
                createdAt: new Date().getTime(),
                message: 'I will be in 10 minutes!'
            }
        ],
        primary: false
    }
];

const Chat = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {ListsChat.map((list, i) => (
                    <ListItem
                        key={i}
                        title={list.name}
                        chevron
                        badge={{ status: list.primary ? 'primary' : null, value: list.chat.length.toString() }}
                        leftAvatar={{ source: { uri: list.avatarURL } }}
                        bottomDivider
                        subtitle={list.chat[0].message}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Chat;
