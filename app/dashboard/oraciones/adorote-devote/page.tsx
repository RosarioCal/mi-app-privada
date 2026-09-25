import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";

export default function AdoroteDevotePage() {
  return (
    <PageTemplate
      titulo="Adorote devote (jueves)"
      volverHref="/dashboard/oraciones"
      volverTexto="Oraciones"
    >

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <div className="space-y-5 text-xl leading-relaxed text-slate-700">

          <p>
            1. Te adoro con devoción, Dios escondido, oculto verdaderamente
            bajo estas apariencias. A ti se somete mi corazón por completo,
            y se rinde totalmente al contemplarte.
          </p>

          <p>
            2. Al juzgar de ti se equivocan la vista, el tacto, el gusto;
            pero basta con el oído para creer con firmeza. Creo todo lo que
            ha dicho el Hijo de Dios: nada es más verdadero que esta palabra
            de verdad.
          </p>

          <p>
            3. En la Cruz se escondía sólo la divinidad, pero aquí también
            se esconde la humanidad. Creo y confieso ambas cosas, y pido lo
            que pidió el ladrón arrepentido.
          </p>

          <p>
            4. No veo las llagas como las vio Tomás, pero confieso que eres
            mi Dios. Haz que yo crea más y más en ti, que en ti espere,
            que te ame.
          </p>

          <p>
            5. ¡Oh memorial de la muerte del Señor! Pan vivo que da la vida
            al hombre. Concédele a mi alma que de ti viva, y que siempre
            saboree tu dulzura.
          </p>

          <p>
            6. Señor Jesús, bondadoso pelícano, límpiame, a mí, inmundo,
            con tu sangre: de la que una sola gota puede liberar de todos
            los crímenes al mundo entero.
          </p>

          <p>
            7. Jesús, a quien ahora veo escondido, te ruego que se cumpla
            lo que tanto ansío: que al mirar tu rostro ya no oculto, sea yo
            feliz viendo tu gloria. Amén.
          </p>

        </div>

      </div>

      <Link
        href="/dashboard"
        className="mt-4 inline-block rounded-xl bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-800"
      >
        ← Inicio
      </Link>

    </PageTemplate>
  );
}