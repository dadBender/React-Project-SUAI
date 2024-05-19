import vanyaImage from "./vanya.svg"
import antonImage from "./anton.svg"
import maxImage from "./max.svg"
import stasImage from "./stas.svg"

export default function PageHome() {
    return (
        <section className="Home">
         <h1 className="title">
            <p className="titleText">Servers</p>
            <p className="titleText">AND</p>
            <p className="titleText">How it works</p>
         </h1>
         <h2>
            <p className="subTitle">This site made by students from group 1145</p>
            <p className="subTitle subTitleLighter">Efimov Anton Andreevich and Vorontsov Ivan Denisovich</p>
         </h2>
         <img src={vanyaImage} alt="" className="PageHomePhoto PageHomePhotoAnton" />
         <img src={antonImage} alt="" className="PageHomePhoto PageHomePhotoIvan" />
         <img src={maxImage} alt="" className="PageHomePhoto PageHomePhotoMax" />
         <img src={stasImage} alt="" className="PageHomePhoto PageHomePhotoStas" />
        
        </section>
    )
}