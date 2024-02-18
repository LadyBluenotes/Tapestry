import Card from "~/components/Card";

export default function Vendors() {
    return(
    <main class="bg-DarkPurple text-center mx-auto text-CosmicLatte p-4">
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        Vendors
      </h1>
      <p class ="grid grid-cols-3 gap-10 my-3">
        <Card>
          <h2>
            Ada-1
          </h2>
          <p>
            Currently Available at Ada-1
          </p>
        </Card>
        <Card>
          <h2>
            Tess Everes
          </h2>
          <p>
            Currently Available at Tess [Bright Dust]
          </p>
        </Card>
        <Card>
          <h2>
            Xur
          </h2>
          <p>
            Currently Available at Xur
          </p>
        </Card>
      </p>
      <h3 class="max-6-xs text-6xl font-thin uppercase my-16">
        Missing Armor Pieces
      </h3>
      <p>
        World Vendors containing armor not already in collections will be listed here
      </p>
    </main>
    )
}