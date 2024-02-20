export default function Card(props:any){
    return(
        <div
        class="bg-OxfordBlue p-10 text-CosmicLatte text-center rounded-md shadow-md"
        >
            {props.children}
        </div>
    )
}