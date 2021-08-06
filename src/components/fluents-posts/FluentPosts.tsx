import React from 'react';
import { DetailsList, DetailsRow, IDetailsRowStyles, IDetailsListProps, DetailsListLayoutMode } from '@fluentui/react/lib/DetailsList';
import { getTheme } from '@fluentui/react/lib/Styling';
import { DeleteButton } from './DeleteButton';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { useSelector } from 'react-redux';
import { ButtonState } from 'src/reducers/buttonReducer';
import { ModalDialog } from './ModalDialog';

export const FluentPosts = () => {

    initializeIcons();

    const theme = getTheme();

    interface DetailsListItem {
        key: number;
        name: string;
        id: number;
        title: string;
        body: string;
    }

    const responseItems: DetailsListItem[] = [];

    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(responce => responce.json())
        .then(apiInfo => {
            for (let i = 0; i < 100; i++) {
                responseItems.push({
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

    const onRenderRow: IDetailsListProps['onRenderRow'] = props => {
        const customStyles: Partial<IDetailsRowStyles> = {};
        if (props) {
            if (props.itemIndex % 2 === 0) {
                customStyles.root = { backgroundColor: theme.palette.themeLighterAlt };
            }

            return <DetailsRow {...props} styles={customStyles} />;
        }
        return null;
    };

    const isButtonClicked = useSelector<ButtonState, boolean>(state => state.buttonClickState);

    return (
        <section className='container-list'>
            <DetailsList
                items={responseItems}
                columns={columns}
                onRenderRow={onRenderRow}
                checkButtonAriaLabel="Row checkbox"
                selectionPreservedOnEmptyClick={true}
                layoutMode={DetailsListLayoutMode.justified}
            />
            <DeleteButton />
            {isButtonClicked && 
                <ModalDialog />
            }
        </section >
    )
}
