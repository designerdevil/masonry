import './Masonry.scss';

function Masonry() {
    return (
        <>
            <h1>Masonry With Css Grid</h1>
            <div className='masonry col4 gap2 rounded'>
                <div className='item'>
                    <img alt='myImage' src='./images/image1.webp' />
                    <div>Item: <strong>1</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image2.webp' />
                    <div>Item: <strong>2</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image3.webp' />
                    <div>Item: <strong>3</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image4.webp' />
                    <div>Item: <strong>4</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image5.webp' />
                    <div>Item: <strong>5</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image6.webp' />
                    <div>Item: <strong>6</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image7.webp' />
                    <div>Item: <strong>7</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image8.webp' />
                    <div>Item: <strong>8</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image9.webp' />
                    <div>Item: <strong>9</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image10.webp' />
                    <div>Item: <strong>10</strong></div>
                </div>
                <div className='item'>
                    <img alt='myImage' src='./images/image11.webp' />
                    <div>Item: <strong>11</strong></div>
                </div>
            </div>
        </>
    );
}

export default Masonry;
