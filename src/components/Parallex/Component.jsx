import  { Parallax } from 'react-parallax'; 
const Component = ({source}) => {
    return (
        <Parallax className='image' blur={1} bgImage={source} strength={800} bgImageStyle={{minHeight:"100vh"}}>
            <div className='content'>
                <span className="img-txt">Lorem Ipsum</span>
            </div>
        </Parallax>
    )
}

export default Component;
