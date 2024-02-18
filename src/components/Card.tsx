export default function Card(props:any){
    return(
        <div
        class="bg-OxfordBlue p-20 text-CosmicLatte text-center rounded-md shadow-md"
        classList={{}}
        >
            {props.children}
        </div>
    )
}