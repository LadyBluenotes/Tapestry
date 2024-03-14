import Card from "~/components/Card";

export default function Guardians() {
    return(
    <main>
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        Guardians
      </h1>
      <p class="grid grid-cols-3 gap-12 p-4 my-3">
        <Card>
          <h2>
            Warlock
          </h2>
        </Card>
        <Card>
          <h2>
            Hunter
          </h2>
        </Card>
        <Card>
          <h2>
            Titan
          </h2>
        </Card>
      </p>
      <p>This will contain a login redirect if user is not signed in</p>
    </main>
    )
}