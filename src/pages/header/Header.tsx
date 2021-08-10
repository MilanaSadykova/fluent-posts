import React from "react";
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

export const Header = () => {

    const navStyles: Partial<INavStyles> = {
        root: {
            border: '1px solid #eee'
        },
        navItem: {

        }
    };

    const navLinks: INavLinkGroup[] = [
        {
            links: [
                {
                    name: 'FLUENT-POSTS',
                    url: '/fluent-posts',
                    key: 'key1',
                    isExpanded: true,
                },
                {
                    name: 'СОЗДАТЬ ПОСТ',
                    url: '/create-post',
                    key: 'key2',
                    isExpanded: true,
                },
                {
                    name: 'GITHUB',
                    url: 'https://github.com/MilanaSadykova',
                    key: 'key3',
                    isExpanded: true,
                    isSelected: true
                }
            ]
        }

    ];



    return (
        <Nav
            selectedKey='key'
            styles={navStyles}
            groups={navLinks}
        />
    )
}