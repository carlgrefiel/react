import ReactPlayer from 'react-player';//to import the library of ReactPlayer (npm install react-player)

function Video() {
    const vidUrl ="https://www.youtube.com/watch?v=LTmvbPETWi0";
    return(
        <div>
          <h1>React Player example</h1>
            <ReactPlayer
            
            url={vidUrl} 
            playing={true}
            volume={.5} />
        </div>
    );

}
export default Video;