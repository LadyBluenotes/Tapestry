import bannerPhoto from './public/Assets/Tapestry_Bannerv1_3.png'

export const Banner = () => {
    return(
        <span>
            <img class="rounded-md my-5"
            src={bannerPhoto}
            alt="site banner"
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, perspiciatis.</p>

        </span>
    );
}