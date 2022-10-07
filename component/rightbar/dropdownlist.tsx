import {faUser, faFileArchive, faTags, faUserGroup, faPen,faSortDown } from '@fortawesome/free-solid-svg-icons'

export const droplist =[
    {
        title : "Dashboard",
        icon: faUser,
        downicon: faUser,
        sublist : []
    },
     {
        title : "Clients",
        icon: faUser,
        downicon: faSortDown,
        sublist :
            [
                {title: "List"},
                {title: "Ajouter"},
                {title: "Modifier"},
                {title: "Suprimmer"}
            ]
    },
    {
        title : "Factures",
        icon: faFileArchive,
        downicon: faSortDown,

        sublist :
        [
            {title: "List"},
            {title: "Ajouter"},
            {title: "Modifier"},
            {title: "Suprimmer"}
        ]
    },   
    {
            title : "Articles",
            icon: faTags,
            downicon: faSortDown,
            sublist :
            [
                {title: "List"},
                {title: "Ajouter"},
                {title: "Modifier"},
                {title: "Suprimmer"}
            ]
    },
    {
        title : "Utilisateur",
        icon: faUserGroup,
        downicon: faSortDown,
        sublist :
        [
            {title: "List"},
            {title: "Ajouter"},
            {title: "Modifier"},
            {title: "Suprimmer"}
        ]
    },
    {
        title : "Rapports",
        icon: faPen,
        downicon: faSortDown,
        sublist :
        [
            {title: "List"},
            {title: "Ajouter"},
            {title: "Modifier"},
            {title: "Suprimmer"}
        ]
    },
    {
        title : "Depenses",
        icon: faTags,
        downicon: faSortDown,
        sublist :
        [
            {title: "List"},
            {title: "Ajouter"},
            {title: "Modifier"},
            {title: "Suprimmer"}
        ]
    }
]
