import React from 'react';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { DetailsList, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';


export const FluentPosts = () => {

    interface IDetailsListCustomFooterExampleItem {
        key: number;
        name: string;
        id: number;
        title: string;
        body: string;
    }

    const responceItems: IDetailsListCustomFooterExampleItem[] = [];

    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(responce => responce.json())
        .then(apiInfo => {
            for (let i = 0; i < 100; i++) {
                responceItems.push({
                    key: i,
                    name: apiInfo[i].userId,
                    id: apiInfo[i].id,
                    title: apiInfo[i].title,
                    body: apiInfo[i].body
                });
            }
        });

    const columns = [
        { key: 'column1', name: 'Имя пользователя', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'ID', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column3', name: 'Заголовок поста', fieldName: 'title', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column4', name: 'Содержание поста', fieldName: 'body', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    return (
        <section>
            <DetailsList
                items={responceItems}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                selectionPreservedOnEmptyClick={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                checkButtonAriaLabel="select row"
            />
        </section >
    )
}