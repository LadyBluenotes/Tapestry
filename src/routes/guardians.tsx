import Card from "~/components/Card";

export default function Guardians() {
    return(
    <main class="bg-DarkPurple text-center mx-auto text-CosmicLatte p-4">
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        Guardians
      </h1>
      <p class="grid grid-cols-3 gap-10 my-3">
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
    </main>
    )
}