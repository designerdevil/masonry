import './Parallax.scss';

function Parallax() {
    return (
        <div id="parallax">
            <div className="parallax-container">
                <div className="image1"></div>
                <div className="image2"></div>
                <img src="http://placekitten.com/150/200" alt=" " />
                <img src="http://placekitten.com/200/150" alt=" " />
                <img src="http://placekitten.com/150/250" alt=" " />
                <img src="http://placekitten.com/300/400" alt=" " />
                <img src="http://placekitten.com/400/300" alt=" " />
            </div>
        </div>
    );
}

export default Parallax;
