import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";

export default function PrecesPage() {
  return (
    <PageTemplate
  titulo="Preces (diario)"
  volverHref="/dashboard/oraciones"
  volverTexto="Oraciones"
>

      <div className="rounded-2xl bg-white p-6 shadow-md">

        <div className="space-y-4 text-slate-700">

          <div>
            <p className="font-semibold">Sérviam!</p>
            <p className="italic">¡Te serviré!</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Ad Trinitátem Beatíssimam.</p>
            <p className="italic">A la Santísima Trinidad.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Grátias tibi, Deus, grátias tibi: vera et una Trínitas, una et summa Déitas, sancta et una Únitas.</p>
            <p className="italic">Gracias a ti, Señor Dios; gracias a ti, Trinidad única y verdadera, Dios único y supremo, Unidad única y santa.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Ad Iesum Christum Regem.</p>
            <p className="italic">A Jesucristo, Rey.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Dóminus Iudex noster; Dóminus Légifer noster; Dóminus Rex noster. Ipse salvábit nos.</p>
            <p className="italic">El Señor es nuestro juez. El Señor es nuestro legislador. El Señor es nuestro Rey. Él nos salvará.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Christe, Fili Dei vivi, miserére nobis.</p>
            <p className="italic">Cristo, Hijo de Dios vivo, ten misericordia de nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Christe, Fili Dei vivi, miserére nobis.</p>
            <p className="italic">Cristo, Hijo de Dios vivo, ten misericordia de nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Exsúrge, Christe, ádiuva nos.</p>
            <p className="italic">Levántate, oh Cristo, ayúdanos.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Et líbera nos propter nomen tuum.</p>
            <p className="italic">Y líbranos a causa de tu nombre.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Dóminus illuminátio mea et salus mea: quem timébo?</p>
            <p className="italic">El Señor es mi luz y mi salvación, ¿a quién temeré?</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Si consístant advérsum me castra, non timébit cor meum; si exsúrgat advérsum me prœlium, in hoc ego sperábo.</p>
            <p className="italic">Si se levantan campamentos contra mí, mi corazón no temerá; si surge un combate en mi contra, en Él yo esperaré.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Ad Beátam Vírginem Maríam Mediatricem.</p>
            <p className="italic">A Santa María Virgen, mediadora.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Recordáre, Virgo Mater Dei, dum stéteris in conspéctu Dómini, ut loquáris pro nobis bona.</p>
            <p className="italic">Acuérdate, oh Virgen Madre de Dios, mientras estás en la presencia del Señor, de hablar cosas buenas de nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Ad Sanctum Ioseph Sponsum Beátæ Maríæ Vírginis.</p>
            <p className="italic">A San José, esposo de Santa María Virgen.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Fecit te Deus quasi Patrem Regis, et dóminum univérsæ domus eius: ora pro nobis.</p>
            <p className="italic">Dios te estableció en el puesto de padre del Rey y en el de señor de toda su casa: ruega por nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Ad Ángelos Custódes.</p>
            <p className="italic">A los Ángeles Custodios.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Sancti Ángeli Custódes nostri, deféndite nos in prœlio ut non pereámus in treméndo iudício.</p>
            <p className="italic">Oh, Santos Ángeles Custodios nuestros, defendednos en el combate, para que no perezcamos en el temible juicio.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Ad Sanctum Iosephmaríam Conditórem nostrum.</p>
            <p className="italic">A san Josemaría, nuestro Fundador.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Intercéde pro fíliis tuis ut, fidéles spirítui Óperis Dei, labórem sanctificémus et ánimas Christo lucrifácere quærámus.</p>
            <p className="italic">Intercede por tus hijos, para que, fieles al espíritu del Opus Dei, santifiquemos el trabajo y ganemos almas para Cristo.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Orémus pro Beatíssimo Papa nostro N.</p>
            <p className="italic">Oremos por el Santo Padre N.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Dóminus consérvet eum, et vivíficet eum, et beátum fáciat eum in terra, et non tradat eum in ánimam inimicórum eius.</p>
            <p className="italic">Que el Señor lo guarde y lo llene de vida y lo haga santo en la tierra y no lo entregue en manos de sus enemigos.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Orémus et pro Antístite huius diœcésis.</p>
            <p className="italic">Oremos también por el Obispo de esta diócesis.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Stet et pascat in fortitúdine tua, Dómine, in sublimitáte nóminis tui.</p>
            <p className="italic">Que se mantenga firme y que ejerza su ministerio de pastor con tu fortaleza, en la sublimidad de tu nombre.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Orémus pro unitáte apostolátus.</p>
            <p className="italic">Oremos por la unidad del apostolado.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Ut omnes unum sint, sicut tu Pater in me et ego in te: ut sint unum, sicut et nos unum sumus.</p>
            <p className="italic">Que todos sean uno, como tú, Padre, en mí y yo en Ti; que sean uno, como también nosotros somos uno.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Omne regnum divísum contra se, desolábitur.</p>
            <p className="italic">Todo reino dividido contra sí mismo, será desolado.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Et omnis cívitas vel domus divísa contra se non stabit.</p>
            <p className="italic">Y toda ciudad o casa dividida contra sí no permanecerá en pie.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Orémus pro benefactóribus nostris.</p>
            <p className="italic">Oremos por nuestros benefactores.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Retribúere dignáre, Dómine, ómnibus nobis bona faciéntibus propter nomen tuum, vitam ætérnam. Amen.</p>
            <p className="italic">Dígnate, Señor, a recompensar con la vida eterna a todos los que nos hacen el bien por tu nombre. Amén.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Orémus pro Patre.</p>
            <p className="italic">Oremos por el Padre.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Misericórdia Dómini ab ætérno et usque in ætérnum super eum: custódit enim Dóminus omnes diligéntes se.</p>
            <p className="italic">Que la misericordia del Señor repose sobre él desde siempre y para siempre, pues el Señor custodia a todos los que le aman.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Orémus et pro frátribus nostris Óperis Dei, vivis atque defúnctis.</p>
            <p className="italic">Oremos también por nuestros hermanos del Opus Dei, vivos y difuntos.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Salvos fac servos tuos, Deus meus, sperántes in te.</p>
            <p className="italic">Salva a tus siervos, Dios mío, que esperan en ti.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Mitte eis, Dómine, auxílium de sancto.</p>
            <p className="italic">Envíales, Señor, tu auxilio desde el cielo.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Et de Sion tuére eos.</p>
            <p className="italic">Y protégelos desde Sión.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Réquiem ætérnam dona eis, Dómine.</p>
            <p className="italic">Concédeles, Señor, el descanso eterno.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Et lux perpétua lúceat eis.</p>
            <p className="italic">Y brille sobre ellos la luz perpetua.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Requiéscant in pace.</p>
            <p className="italic">Descansen en paz.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Amen.</p>
            <p className="italic">Amén.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Dómine, exáudi oratiónem meam.</p>
            <p className="italic">Señor, escucha mi oración.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Et clamor meus ad te véniat.</p>
            <p className="italic">Y llegue a ti mi clamor.</p>
          </div>

          <div>
            <p className="font-semibold">
                Si un sacerdote dirige las Preces, se alza y añade: El Señor esté con vosotros, permaneciendo en pie también mientras recita la oración.
            </p>
        </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Dóminus vobíscum.</p>
            <p className="italic">El Señor esté con vosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Et cum spíritu tuo.</p>
            <p className="italic">Y con tu espíritu.</p>
          </div>

          <div>
            <p className="font-semibold">Orémus.</p>
            <p className="italic">Oremos.</p>
          </div>

          <div>
            <p>
              Deus, cui próprium est miseréri semper et párcere: súscipe deprecatiónem nostram.
              Ure igne Sancti Spíritus renes nostros et cor nostrum, Dómine: ut tibi casto
              córpore serviámus, et mundo corde placeámus.
            </p>
            <p className="italic">
              Oh Dios, de quien es propio compadecerse siempre y perdonar: acoge nuestra súplica.
              Enciende, Señor, nuestras entrañas y nuestro corazón con el fuego del Espíritu Santo:
              para que te sirvamos con un comportamiento casto y te agrademos por nuestro corazón limpio.
            </p>
          </div>

          <div>
            <p>
              Actiónes nostras, quǽsumus Dómine, aspirándo prǽveni et adiuvándo proséquere:
              ut cuncta nostra orátio et operátio a te semper incípiat, et per te cœpta finiátur.
              Per Christum Dóminum nostrum.
            </p>
            <p className="italic">
              Te pedimos, Señor, que te anticipes a nuestras acciones inspirándolas y que las acompañes
              sosteniéndolas: para que toda nuestra oración y actuación empiece en ti y por ti llegue
              a cumplimiento lo iniciado. Por Cristo nuestro Señor.
            </p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Amen.</p>
            <p className="italic">Amén.</p>
          </div>

          <div>
            <p className="font-semibold">Todos dicen:</p>
          </div>

          <div>
            <p>
              Gáudium cum pace, emendatiónem vitæ, spátium veræ pœniténtiæ, grátiam et
              consolatiónem Sancti Spíritus atque in Ópere Dei perseverántiam, tríbuat nobis
              Omnípotens et Miséricors Dóminus.
            </p>
            <p className="italic">
              Que el Señor omnipotente y misericordioso nos conceda la alegría y la paz,
              la conversión de nuestra vida, un tiempo de verdadera penitencia, la gracia y
              el consuelo del Espíritu Santo y la perseverancia en el Opus Dei.
            </p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Sancte Míchaël.</p>
            <p className="italic">San Miguel.</p>
            <p><span className="font-semibold text-red-700">R/.</span> Ora pro nobis.</p>
            <p className="italic">Ruega por nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Sancte Gábriel.</p>
            <p className="italic">San Gabriel.</p>
            <p><span className="font-semibold text-red-700">R/.</span> Ora pro nobis.</p>
            <p className="italic">Ruega por nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Sancte Ráphaël.</p>
            <p className="italic">San Rafael.</p>
            <p><span className="font-semibold text-red-700">R/.</span> Ora pro nobis.</p>
            <p className="italic">Ruega por nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Sancte Petre.</p>
            <p className="italic">San Pedro.</p>
            <p><span className="font-semibold text-red-700">R/.</span> Ora pro nobis.</p>
            <p className="italic">Ruega por nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Sancte Paule.</p>
            <p className="italic">San Pablo.</p>
            <p><span className="font-semibold text-red-700">R/.</span> Ora pro nobis.</p>
            <p className="italic">Ruega por nosotros.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Sancte Ioánnes.</p>
            <p className="italic">San Juan.</p>
            <p><span className="font-semibold text-red-700">R/.</span> Ora pro nobis.</p>
            <p className="italic">Ruega por nosotros.</p>
          </div>

          <div>
            <p className="font-semibold">
            Cuando esté presente algún sacerdote, el que hace cabeza dice:
            </p>
          </div>

          <div>
            <p>Iube, Domne, benedícere.</p>
            <p className="italic">Dígnate, padre, bendecirnos.</p>
          </div>

          <div>
            <p className="font-semibold">El sacerdote bendice:</p>
          </div>

          <div>
            <p>
              Dóminus sit in córdibus vestris, et in lábiis vestris, in nómine Patris †
              et Fílii et Spíritus Sancti.
            </p>
            <p className="italic">
              Que el Señor esté en vuestros corazones y en vuestros labios, en el nombre
              del Padre † y del Hijo y del Espíritu Santo.
            </p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> Amen.</p>
            <p className="italic">Amén.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">V/.</span> Pax.</p>
            <p className="italic">Paz.</p>
          </div>

          <div>
            <p><span className="font-semibold text-red-700">R/.</span> In ætérnum.</p>
            <p className="italic">Para siempre.</p>
          </div>

          <div className="pt-4 text-center text-sm text-slate-500">
            © Prælatura Sanctæ Crucis et Operis Dei
          </div>

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