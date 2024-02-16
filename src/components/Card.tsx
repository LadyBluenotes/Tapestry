export default function Card(props:any){
    return(
    <div
    class="bg-OxfordBlue p-4 text-CosmicLatte text-center"
    classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
    >
        {props.children}
        
    </div>
    )
}