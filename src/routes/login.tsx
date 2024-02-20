import Card from "~/components/Card";


export default function Login() {
    return(
    <main>
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        Login
      </h1>
      <p>
        Sign in and authorize with Bungie to view your guardians, favorite shaders, and check vendors for missing flair!
      </p>
      <Card>
        <h2>
          Bungie.net Auth
        </h2>
      </Card>
    </main>
    )
}