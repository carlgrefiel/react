import PromoHeading from "./PromoHeading";

const data = {
    heading: "99% of all Items!",
    callToAction: "Everything must Go!"
}


function Promo() {
    
    return (
        <div>
            <PromoHeading  
            heading={data.heading}
            callToAction={data.callToAction}
            />
        </div>
    )
}

export default Promo;