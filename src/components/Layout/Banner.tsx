import bannerPhoto from '/Assets/Tapestry_Bannerv1_3.png'

export const Banner = () => {
    return(
        <span>
            <img class="mx-auto rounded-md p-3 my-5"
            src={bannerPhoto}
            alt="site banner"
            />
            <p>"Timelines are born from each moment — we live on one thread woven into a vast tapestry."</p>
            <p>"Paths only end when we stop walking."</p>

        </span>
    );
}