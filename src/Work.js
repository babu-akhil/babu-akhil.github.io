import Navbar  from "./Navbar";
import Links from "./Links";

import './Work.css'


function WorkComponent() {
    return (
        <div class = 'Work'>
            <Links />
            <div className ='title'>WORK</div>

            <div className = "WorkEntries Introduction">

                I am a Math graduate and a self taught programmer. I have a broad spectrum of
                interests and constantly strive to learn new things, and make beautiful and functional
                products on the way. My current technical skillset include: 
                <ul>
                    <li> Python for Data Science. Proficient in Sklearn, Pandas, Tensorflow, Keras, OpenCV.</li>
                    <li> Web Development with HTML / CSS / Javascript.</li>
                    <li> Familiar with ReactJS.</li>
                    <li> Familiar with Remote Sensing Libraries like Rasterio, GDAL, Sentinelhub.</li>
                    <li> Familiar with Git, Node.</li>
                    <li> Have used in the past: C++, MATLAB, Scala</li>
                </ul>
                <br></br>
                <br></br>
                <div class = 'Experiences'>EXPERIENCES</div>
            </div>
            <div className = 'WorkEntries'>
                <h1> Machine Learning Applications with Remote Sensing/Satellite Data</h1>
                <div className = 'company'>
                    Vasundharaa Geotechnologies, Pune, India.
                </div>
                <div className = 'timeline'>
                    Dec 2020 to May 2021
                </div>
                <div className = 'description'>
                    After graduating with a degree in mathematics, I
                    joined Vasundharaa , a start-up in the remote sensing
                    domain. The active problems assigned me were to automate
                    forest fire detection from satellite images, building footprint
                    demarcation and some video analytics problems.
                    <br></br>
                    <br></br>
                    <h2>Responsibilities</h2>
                    <ul>
                        <li><h3>Building ML Models for Fire Detection and
                                 Building Detection</h3>
                            We used convolutional neural nets built in keras-tensorflow
                            to complete this task. Unet and HR-Net were taken as starting
                            points, and we added a attention block to both to improve
                            performance. Forest fire detection was done using SWIR, NIR
                            and Red Bands from Sentinel-2 and Landsat-8 images. Building detection
                            was done using images from Pleadis for Panvel district in Mumbai.
                            Training sets for these models were created in-house by manual
                            annotation. Training and testing was done initially on Google Colab, 
                            and later moved to AWS EC2.
                        </li>
                    </ul>
                </div>
            </div>
            <div className = 'WorkEntries'>
                <h1>Web Development</h1>
                <div className = 'description'>
                    I learnt web development with HTML/CSS/Javascript 
                    through a online course <a href = 'https://www.theodinproject.com'>
                        (linked here)</a>.
                         Here are a few samples of websites I have made:
                        <br></br>
                        <br></br>
                        <br></br>
                        <ul>
                            <li>This portfolio website is made by myself, almost entirely in React.
                            </li>
                            <li>
                                <a href = 'https://babu-akhil.github.io/restaurant-homepage/'>
                                    A restaurant homepage.
                                </a>
                            </li>
                            <li>
                                <a href ='https://babu-akhil.github.io/weather/'>
                                    A weather info web app.
                                </a>
                            </li>
                            <li>
                                <a href = 'https://babu-akhil.github.io/memory-game/'>
                                    A card game to test your memory.
                                </a>
                            </li>
                            <li>
                                Currently working on a ecommerce site prototype, and some 
                                applications to make music from the browser.
                            </li>
                        </ul>        
                        <br></br>
                </div> 
                <br></br>
                <br></br>
                <br></br>
                <div className = 'contact'>
                    Feel free to contact me at <a href = 'mailto:realakhilbabu@gmail.com'>
                    realakhilbabu@gmail.com</a> if you are interested in working with me.
                    I am currently looking for a job or freelance opportunities!
                </div>
            </div>

            

        </div>
    )
}

export default WorkComponent;