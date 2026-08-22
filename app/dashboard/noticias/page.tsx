import PageTemplate from "@/components/PageTemplate";

export default function NoticiasPage() {
  return (
    <PageTemplate titulo="Noticias digital">

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <p className="text-xl leading-relaxed text-slate-700">
        Para consultar los Noticias, pulsa el botón.
        </p>

        <div className="mt-6 space-y-3 text-lg text-slate-700">
          <p>
            <strong>USUARIO:</strong> noticiasdigital-es
          </p>

          <p>
            <strong>CONTRASEÑA:</strong> NoticiasDigital@ES
          </p>
        </div>

        <a
          href="https://noticiasdigital.org"
          target="_blank"
          rel="noreferrer"
          className="mt-6 block w-full rounded-xl bg-yellow-200 py-3 text-center font-medium text-slate-800 transition hover:bg-yellow-300"
        >
          Abrir Noticias digital
        </a>

      </div>

    </PageTemplate>
  );
}