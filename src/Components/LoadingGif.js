import loadingGif from "../assets/LoadingGif.gif"

/**
 * The function is a component which returns the loading gif.
 * @returns {JSX.Element} The loading gif.
 * @constructor
 */
function LoadingGif() {
    return (
       <img src={loadingGif} alt="LoadingGif" className="img-responsive mx-auto d-block" width="280" height="280"/>
    );
}

export default LoadingGif;