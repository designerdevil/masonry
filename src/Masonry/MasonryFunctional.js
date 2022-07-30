import {useState} from 'react';
import ConfigForm from './ConfigForm';
import './Masonry.scss';

const defaultMasonryState = {
    col: '',
    rounded: '',
    gap: '',
    clickable: '',
    galleryType: '',
    theme: '',
    items: [],
}
function MasonryFunctional() {
    const [masonryState, setMasonryState] = useState(defaultMasonryState);
    const { col, rounded, gap, clickable, galleryType, theme, items } = masonryState;
    return (
        <>
            <ConfigForm masonryState={masonryState} setMasonryState={setMasonryState} />
            <div className={`masonry ${galleryType} ${col} ${rounded} ${gap} ${clickable} ${theme}`}>
            {items &&
                items.map(({
                    itemWidth,
                    itemHeight,
                    itemFocus,
                    itemImage,
                }, index) => {
                    return (
                        <div key={index} className={`item ${itemWidth} ${itemHeight} ${itemFocus}`}>
                            <div className='image-holder'><img alt='myImage' src={`./images/${itemImage}.webp`} /></div>
                            <div className='item-indicator'>Item: <strong>{`${index + 1}`}</strong></div>
                            <div className='content-holder'>
                                <strong>Title</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum dui massa, congue dignissim tellus egestas at. Ut in nisl viverra</p>
                            </div>
                            <div className='action-holder'>
                                <a href="https://www.google.com" target="_blank" rel="noreferrer">Read more</a>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </>
    );
}

export default MasonryFunctional;
