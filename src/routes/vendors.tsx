import Card from "~/components/Card";

export default function Vendors() {
    return(
    <main>
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        Vendors
      </h1>
      <p class ="grid grid-cols-3 gap-12 p-4 my-3">
        <Card>
          <h2>
            Ada-1
          </h2>
          <p>
            Armor + Shaders currently available at Ada-1
          </p>
        </Card>
        <Card>
          <h2>
            Tess Everis
          </h2>
          <p>
            Ornaments and Shaders currently available at Tess [Bright Dust]
          </p>
        </Card>
        <Card>
          <h2>
            Xur
          </h2>
          <p>
            Armor currently available at Traveling-Xur
          </p>
        </Card>
      </p>
      <h3 class="max-6-xs text-6xl font-thin uppercase my-16">
        Missing Armor Pieces
      </h3>
      <p>
        World Vendors containing armor not already in collections listed here
      </p>
    </main>
    )
}