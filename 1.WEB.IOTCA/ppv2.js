const secciones = {
    inicio: `
        <section class="about-section">
            <div class="about-container">
                <div class="about-left">
                    <span class="about-tag">NUESTRO INSTITUTO</span>
                    <h2>Excelencia académica con <span class="purple-text">visión de futuro</span></h2>
                    <p>El Instituto Oficial Polivalente Tiburcio Carías Andino es uno de los centros educativos de nivel medio más importantes del municipio de Las Vegas, en el departamento de Santa Bárbara, Honduras. Es una institución pública (gubernamental) que ofrece educación básica y media a cientos de jóvenes de la región.  </p>
                    <p>Se encuentra ubicado en la zona urbana de Las Vegas, Santa Bárbara, cerca del Estadio Municipal y del Centro de Salud del municipio.</p>
                    <button class="btn-more" onclick="cargarSeccion('historia')">MÁS SOBRE NOSOTROS ➔</button><br><br>
                </div>


                <div class="about-center">
                    <div class="image-card">
                        <img src="foto1.png" alt="Instalaciones">
                    </div>
                </div>

                <div class="about-right">
                    <div class="info-item">
                        <div class="info-icon">📘</div>
                        <div class="info-text">
                            <h3>Educación Polivalente</h3>
                            <p>Combinamos con éxito la formación académica con orientaciones técnicas.</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">⚙️</div>
                        <div class="info-text">
                            <h3>Desarrollo Integral</h3>
                            <p>Potenciamos el talento mediante actividades científicas y culturales.</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon">🤝</div>
                        <div class="info-text">
                            <h3>Vinculación Superior</h3>
                            <p>Lazos estratégicos con universidades de prestigio como la UCENM.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`,

    historia: `
        <section class="about-container">
            <div class="about-center">
                <h2>NUESTRA HISTORIA</h2><br><br>
                <p>El Instituto Oficial Polivalente Tiburcio Carías Andino es una institución educativa pública ubicada en el municipio de Las Vegas. Fue creado para brindar educación básica y media a los jóvenes de la región, convirtiéndose con el paso de los años en uno de los centros educativos más importantes del occidente de Honduras.</p><br>
                <p>Su carácter “polivalente” le permite ofrecer tanto formación académica como formación técnica profesional, preparando a los estudiantes para incorporarse al mundo laboral o continuar estudios universitarios.</p><br>
                <p>Actualmente funciona en los niveles de III Ciclo de Educación Básica y Educación Media, atendiendo estudiantes de Las Vegas y comunidades vecinas. Además, ha desarrollado vínculos con universidades hondureñas para facilitar la continuidad educativa de sus egresados.</p><br>
                
                <div class="about-center">
                    <div class="image-card">
                        <img src="Pantera.png" alt="Instalaciones">
                    </div>
                </div>

            </div>
        </section>`,


    mision: `
        <section class="about-container">
            <div class="about-center">
                <h2>MISION Y VISION</h2><br><br>
                <span class="about-tag">MISION</span>
                <p>Formar jóvenes con excelente calidad humana, académica y profesional, capaces de crear y fomentar el bien común para la sociedad, aportando esfuerzos para el desarrollo sostenible de Honduras.</p><br>

                <span class="about-tag">VISION</span>
                <p>Proyectar a corto, mediano y largo plazo un instituto que proporcione oportunidades de formación a la comunidad local y regional, fortaleciendo el arte, la cultura, la moral, el deporte, el trabajo y las ciencias para ofrecer una educación integral, involucrando activamente a los padres de familia en la formación de sus hijos.</p><br>

            </div>
        </section>`,


    valores: `
        <section class="about-container">
        <div class="about-center">
            <div>
                <h2>VALORES INSTITUCIONALES</h2><br><br>
                <p>Los valores institucionales son los principios que orientan la 
                conducta de estudiantes, docentes, personal administrativo y padres de familia. 
                Su objetivo es fomentar una convivencia armoniosa, fortalecer la formación integral de los 
                jóvenes y promover una cultura de respeto, responsabilidad y compromiso con la sociedad.</p><br><br>
            </div>

            <div>
                <h2>RESPETO</h2>
                <p>Es la capacidad de reconocer y valorar la digni
                dad, los derechos y las opiniones de todas las personas.</p><br>
                <p>SE REFLEJA EN:</p>
                    <li>Tratar con cortesía a compañeros, docentes y personal administrativo.</li>
                    <li>Escuchar las opiniones de los demás.</li>
                    <li>Cuidar las instalaciones y recursos del instituto.</li>
                    <li>Aceptar las diferencias culturales, sociales y personales.</li><br><br>
            <div>

            <div>
                <h2>RESPONSABILIDAD</h2><br>
                <p>Consiste en cumplir los deberes y compromisos asumidos de manera consciente y puntual.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Asistir regularmente a clases.</li>
                    <li>Entregar tareas y proyectos en las fechas establecidas.</li>
                    <li>Cumplir las normas institucionales.</li>
                    <li>Asumir las consecuencias de las propias acciones.</li><br><br>
            <div>

            <div>
                <h2>HONESTIDAD</h2>
                <p>Implica actuar con sinceridad, transparencia y rectitud en todas las actividades académicas y personales.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Evitar copiar en exámenes o tareas.</li>
                    <li>Decir siempre la verdad.</li>
                    <li>Reconocer errores cuando se cometen.</li>
                    <li>Respetar los bienes ajenos.</li><br><br>
            <div>

            <div>
                <h2>LEALTAD</h2>
                <p>Es el compromiso de actuar con fidelidad hacia los principios, valores y objetivos de la institución.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Defender el buen nombre del instituto.</li>
                    <li>Participar activamente en actividades institucionales.</li>
                    <li>Apoyar a compañeros y docentes.</li>
                    <li>Mantener una actitud positiva hacia la comunidad educativa.</li><br><br>
            <div>

            <div>
                <h2>GENEROSIDAD</h2>
                <p>Es la disposición para ayudar a los demás sin esperar recompensas.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Colaborar con compañeros que necesiten apoyo.</li>
                    <li>Participar en actividades solidarias.</li>
                    <li>Compartir conocimientos y experiencias.</li>
                    <li>Contribuir al bienestar común.</li><br><br>
            <div>

            <div>
                <h2>LABORIOSIDAD</h2>
                <p>Es la actitud de trabajar con dedicación, esfuerzo y constancia para alcanzar metas.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Mantener una actitud positiva hacia el estudio.</li>
                    <li>Participar activamente en proyectos académicos.</li>
                    <li>Buscar la excelencia en cada actividad realizada.</li>
                    <li>Aprovechar al máximo las oportunidades de aprendizaje.</li><br><br>
            <div>

            <div>
                <h2>PERSEVERANCIA</h2>
                <p>Es la capacidad de mantenerse firme ante las dificultades hasta lograr los objetivos propuestos.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>No rendirse ante los desafíos académicos.</li>
                    <li>Buscar soluciones a los problemas.</li>
                    <li>Mejorar continuamente el desempeño personal.</li>
                    <li>Mantener el interés por aprender.</li><br><br>
            <div>

            <div>
                <h2>ORDEN</h2>
                <p>Consiste en organizar adecuadamente las actividades, recursos y espacios de trabajo.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Mantener limpias las aulas y áreas comunes.</li>
                    <li>Cumplir horarios establecidos.</li>
                    <li>Presentar trabajos de manera organizada.</li>
                    <li>Utilizar correctamente los recursos educativos.</li><br><br>
            <div>

            <div>
                <h2>CALIDAD</h2>
                <p>Representa el compromiso permanente con la mejora continua en los procesos educativos.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Buscar altos niveles de rendimiento académico.</li>
                    <li>Innovar en los métodos de enseñanza y aprendizaje.</li>
                    <li>Promover la excelencia en todas las áreas institucionales.</li>
                    <li>Evaluar constantemente los resultados para mejorar.</li><br><br>
            <div>

            <div>
                <h2>EQUIDAD E INCLUSION</h2>
                <p>Garantiza igualdad de oportunidades para todos los estudiantes sin distinción alguna.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Respetar la diversidad.</li>
                    <li>Promover la participación de todos.</li>
                    <li>Evitar cualquier forma de discriminación.</li>
                    <li>Facilitar un ambiente educativo accesible y justo.</li><br><br>
            <div>

            <div>
                <h2>PARTICIPACION</h2>
                <p>Es la integración activa de todos los miembros de la comunidad educativa en la vida institucional.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Participar en actividades académicas y culturales.</li>
                    <li>Integrar comités y organizaciones estudiantiles.</li>
                    <li>Colaborar en proyectos de mejora institucional.</li>
                    <li>Expresar opiniones de forma responsable.</li><br><br>
            <div>

            <div>
                <h2>TRANSPARENCIA</h2>
                <p>Consiste en actuar con claridad, honestidad y apertura en la toma de decisiones.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Manejo responsable de recursos.</li>
                    <li>Comunicación clara entre autoridades y estudiantes.</li>
                    <li>Rendición de cuentas en las actividades institucionales.</li>
                    <li>Cumplimiento de normas y procedimientos.</li><br><br>
            <div>

            <div>
                <h2>DEMOCRACIA</h2>
                <p>Promueve la participación libre y responsable de todos los miembros de la comunidad educativa.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Elección de gobiernos estudiantiles.</li>
                    <li>Respeto por las decisiones colectivas.</li>
                    <li>Libertad de expresión con responsabilidad.</li>
                    <li>Resolución pacífica de conflictos.</li><br><br>
            <div>

            <div>
                <h2>CONVIVENCIA PACIFICA</h2>
                <p>Busca mantener un ambiente seguro, respetuoso y armonioso dentro de la institución.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Resolver conflictos mediante el diálogo.</li>
                    <li>Rechazar cualquier forma de violencia.</li>
                    <li>Fomentar la tolerancia y el compañerismo.</li>
                    <li>Construir relaciones basadas en el respeto mutuo.</li><br><br>
            <div>

            <div>
                <h2>COMPROMISO INSTITUCIONAL</h2>
                <p>Aunque no siempre aparece como valor formal, es un principio fundamental en toda institución educativa.</p><br>
                    <p>SE REFLEJA EN:</p>
                    <li>Sentido de pertenencia hacia el instituto.</li>
                    <li>Participación en eventos académicos, culturales y deportivos.</li>
                    <li>Representar dignamente a la institución.</li>
                    <li>Contribuir al crecimiento y prestigio del centro educativo.</li><br><br>
            <div>

            <div>
                <h2>IMPORTANCIA DE LOS VALORES INSTITUCIONALES</h2>
                <p>Los valores institucionales constituyen la base de la formación integral de los estudiantes. No solo buscan el desarrollo académico, sino también la formación de ciudadanos responsables, éticos, solidarios y comprometidos con el desarrollo de su comunidad y de Honduras.</p><br>
                <p>“Educar en valores es formar personas capaces de transformar positivamente la sociedad.”</p><br><br>
                   
            <div>
        </div>
        </section>`,


    autoridades: `
        <section class="about-container">
            <div class="about-center">
                <h2>Autoridades</h2><br>
                <p>Conoce a nuestro equipo directivo y docente.</p><br>

                <h3>DIRECTOR DEL CENTRO EDUCATIVO </h3>
                <p>Abogado Wilfredo Armando Salinas Pineda</p><br>
                    <img src="Pantera.png" alt="Autoridades"><br>
                
                
            


            </div>
        </section>`,


    'ofertas-academicas': `
        <section class="about-container">
            <div class="about-center">

                <h1>OFERTAS ACADEMICAS</h1><br>

                <h2>EDUCACION BASICA</h2><br>
                <p>La educación básica es el nivel educativo que se orienta hacia la formación integral de los educandos en sus dimensiones física, afectiva, cognitiva, social, cultural, moral y espiritual, desarrollando sus capacidades de acuerdo a los conocimientos, habilidades y actitudes definidos en el currículo prescrito para este nivel, los cuales permiten continuar el proceso educativo formal.</p><br><br>
                
                <span class="about-tag">TERCER CICLO</span>
                <li>Séptimo grado</li>
                <li>Octavo grado</li>
                <li>Noveno grado</li><br><br>

                <h1>MODULOS (7mo a 9no grado)</h1><br>
            
                <span class="about-tag">MODULO DE AGROPECUARIA</span>
                <p>El Módulo o Taller de Agropecuaria es un espacio de aprendizaje eminentemente práctico e integral que se imparte tanto en el Tercer Ciclo de Educación Básica como en el Bachillerato Técnico Profesional (BTP) de los institutos polivalentes de Honduras, diseñado para desarrollar competencias clave en la producción sostenible de alimentos y la gestión del campo. Mediante la metodología de "aprender haciendo", los estudiantes adquieren conocimientos técnicos fundamentales divididos en dos grandes áreas: la agricultura (olericultura, manejo de suelos, preparación de parcelas, uso de sistemas de riego y control de plagas en cultivos) y la ganadería (cuidado, nutrición, reproducción y manejo menor de especies como aves de corral, cerdos o ganado bovino). Además de las faenas directas en la tierra y con los animales, el taller enfatiza el uso seguro de herramientas agrícolas, la conservación de los recursos naturales y la introducción a la administración de empresas rurales y proyectos de agroemprendimiento. Este bloque formativo no solo fomenta el respeto por el medio ambiente y la seguridad alimentaria de la comunidad escolar, sino que dota a los jóvenes de capacidades técnicas indispensables para insertarse con éxito en el mercado laboral agrícola o para emprender sus propias unidades de producción independientes en el país.</p><br><br>

                <span class="about-tag">MODULO DE HOGAR</span>
                <p>El Módulo o Taller de Educación para el Hogar es un espacio formativo eminentemente práctico que se imparte en el Tercer Ciclo de Educación Básica (7.º, 8.º y 9.º grado) dentro de los institutos polivalentes y técnicos de Honduras, enfocado en desarrollar competencias fundamentales para el bienestar personal, la economía familiar y el emprendimiento comunitario. A través de una metodología activa, los estudiantes adquieren conocimientos esenciales en la preparación e higiene de alimentos, nutrición balanceada, manualidades, costura básica, cuidado de la salud y administración de recursos domésticos. El taller no solo busca enseñar tareas cotidianas, sino fomentar la capacidad de autogestión y el trabajo en equipo, preparando a los jóvenes para idear pequeños proyectos de negocios o actividades económicas locales —como la elaboración y venta de productos alimenticios— para el beneficio del propio equipamiento estudiantil. Este espacio integral complementa la formación técnica de la institución al promover valores de convivencia, equidad en los roles del hogar y destrezas manuales esenciales que sirven como base para la vida diaria o para futuras especializaciones profesionales.</p><br><br>

                <span class="about-tag">ESTRUCTURAS METALICAS</span>
                <p>El Módulo de Estructuras Metálicas es un bloque de capacitación puramente técnico y práctico integrado en el Bachillerato en Construcciones Metálicas del Instituto Oficial Polivalente Tiburcio Carías Andino, cuyo propósito principal es especializar a los estudiantes en la fabricación, soldadura y montaje de componentes de acero a gran escala para el sector de la construcción e industria pesada. A lo largo de esta formación, los alumnos aprenden desde la interpretación y despiece de planos de ingeniería hasta el uso de maquinaria industrial avanzada para el corte por plasma, oxicorte y conformado de láminas y perfiles estructurales, prestando especial atención al dominio de procesos de soldadura de alta resistencia como el arco eléctrico y los sistemas semiautomáticos. Asimismo, el módulo capacita en maniobras de campo y montaje en alturas para la colocación de columnas, cerchas y techados bajo estrictas normas de seguridad industrial y prevención de riesgos, lo que otorga a los egresados un perfil altamente cotizado y listo para trabajar de inmediato como armadores, soldadores calificados o supervisores en la edificación de naves industriales, puentes y complejos comerciales en todo el país.</p><br><br>

                <h1>EDUCACION MEDIA (10mo grado)</h1><br>
                <p>El Nivel de Educación Media en Honduras representa el ciclo educativo posterior a la Educación Básica (7.º, 8.º y 9.º grado), diseñado para estudiantes de entre 15 y 18 años, con el propósito dual de prepararlos para el ingreso a la educación superior y dotarlos de competencias laborales inmediatas a través del Bachillerato Técnico Profesional (BTP) o el Bachillerato en Ciencias y Humanidades (BCH). Para facilitar que los alumnos elijan la carrera idónea de acuerdo con sus aptitudes e intereses, el sistema educativo y los institutos polivalentes implementan estrategias clave de orientación durante el noveno grado, que incluyen la aplicación de pruebas psicométricas y test de orientación vocacional que evalúan habilidades lógicas, numéricas, verbales y manuales. Asimismo, los colegios organizan ferias de carreras, charlas informativas y pasantías diagnósticas donde los jóvenes experimentan directamente la dinámica de los diferentes talleres, permitiéndoles identificar si poseen inclinación hacia áreas técnicas e industriales —como las Construcciones Metálicas o la Agropecuaria— o hacia el sector de servicios, administración y ciencias. Este proceso de elección guiada asegura que el estudiante tome una decisión informada y alineada con sus metas personales, reduciendo la deserción escolar y garantizando un tránsito exitoso hacia el mercado de trabajo o la formación universitaria en el país.</p><br><br>

                <h1>BACHILLERATOS (11avo a 12avo grado)</h1><br>

                <span class="about-tag">BACHILLERATO EN CIENCIAS Y HUMANIDADES</span>
                <p>El Bachillerato en Ciencias y Humanidades (BCH) es una modalidad de la Educación Media en Honduras que consta de 2 años de duración (décimo y undécimo grado), cuyo propósito principal es brindar una sólida formación académica general para preparar a los estudiantes exclusivamente hacia el ingreso a la educación superior o universitaria. A diferencia de los Bachilleratos Técnicos Profesionales (BTP) que se extienden por tres años y priorizan el trabajo en talleres industriales, el plan de estudios del BCH, regulado por la Secretaría de Educación, concentra su carga horaria en disciplinas científicas avanzadas —como matemáticas aplicadas, física elemental, química orgánica y biología— y en el área humanística, potenciando el análisis crítico mediante asignaturas de filosofía, sociología, psicología, historia y un fuerte componente de comunicación lingüística y lenguas extranjeras. Al no requerir pasantías extensas en talleres mecánicos o agrarios, este bachillerato enfoca su formación en la investigación, el uso sistemático de tecnologías de información y la consolidación de competencias intelectuales rigurosas, convirtiéndose en la opción ideal para los alumnos que tienen la total certeza de continuar carreras universitarias de larga duración en campos como la medicina, las ingenierías puras, el derecho, la psicología o las ciencias sociales.</p><br><br>

                <span class="about-tag">BACHILLERATO TECNICO PROFECIONAL EN INFORMATICA</span>
                <p>El Bachillerato Técnico Profesional en Informática (BTPI) es una modalidad de la Educación Media en Honduras que consta de 3 años de duración (décimo, undécimo y duodécimo grado), cuyo propósito principal es formar técnicos capaces de crear software, dar soporte a infraestructura tecnológica y administrar redes para responder a las demandas del mercado digital actual. A diferencia de la formación humanística pura, el plan de estudios diseñado por la Secretaría de Educación equilibra la teoría científica con un aprendizaje fuertemente práctico basado en laboratorios tecnológicos, abarcando módulos especializados que van desde la ofimática básica y el diseño web hasta la lógica de algoritmos, lenguajes de programación estructurada, bases de datos y la configuración de sistemas operativos. Asimismo, el programa desarrolla sólidas competencias en el mantenimiento correctivo y preventivo de hardware, así como en el diseño de redes informáticas locales y su respectiva seguridad, asegurando que el estudiante sepa diagnosticar y reparar fallas informáticas complejas. Al finalizar el duodécimo grado, y tras concluir su Práctica Profesional Tutelada en empresas del sector público o privado, el egresado adquiere un perfil polivalente e integral que le faculta tanto para ingresar con éxito a ingenierías universitarias como para insertarse de inmediato en el mundo laboral, ocupando puestos como técnico de soporte, administrador de redes o desarrollador junior.</p><br><br>

                <span class="about-tag">BACHILLERATO TECNICO PROFECIONAL EN CONTADURIA Y FINANZAS</span>
                <p>El Bachillerato Técnico Profesional en Contaduría y Finanzas (BTPCF) es una modalidad de la Educación Media en Honduras que consta de 3 años de duración (décimo, undécimo y duodécimo grado), cuyo propósito principal es formar profesionales técnicos capaces de administrar, registrar y auditar las operaciones económicas de empresas comerciales, industriales y de servicios. A diferencia de las especialidades industriales, el plan de estudios normado por la Secretaría de Educación sustituye las labores de taller por el dominio de laboratorios contables, donde los estudiantes aprenden de forma práctica el ciclo contable completo, la elaboración e interpretación de estados financieros, el control de inventarios, la gestión de planillas salariales y el cálculo de obligaciones tributarias según las leyes fiscales vigentes en el país. El programa complementa esta base con módulos avanzados de auditoría interna, presupuestos, matemáticas financieras, economía y el uso de software contable automatizado, asegurando que el alumno maneje herramientas digitales clave para la toma de decisiones corporativas. Al concluir el último año, y tras completar su Práctica Profesional obligatoria en bancos, firmas de auditoría o departamentos administrativos, el egresado posee un perfil integral que le permite insertarse de inmediato en el mercado laboral como contador general, auxiliar de auditoría, cajero bancario o gestor financiero, contando al mismo tiempo con la base científica necesaria para cursar carreras universitarias como Contaduría Pública, Administración de Empresas, Economía o Banca y Finanzas.</p><br><br>

            </div>
        </section>`,

    galeria: `
        <section class="about-container">
            <div class="about-center">
                <h1>Galería</h1>
                <p>Conoce un poco sobre nuestras instalaciones</p><br><br>
                <img src="Pantera.png" alt="instalaciones"><br>
                <img src="Pantera.png" alt="instalaciones"><br>
                <img src="Pantera.png" alt="instalaciones"><br>
                <img src="Pantera.png" alt="instalaciones"><br>
            </div>
        </section>`
};

function cargarSeccion(nombre) {

    const contenedor =
    document.getElementById('contenedor-dinamico');

    if (!contenedor) return;

    contenedor.style.opacity = '0';

    setTimeout(() => {

        contenedor.innerHTML =
        secciones[nombre] ||
        secciones['inicio'];

        contenedor.style.opacity = '1';

        window.scrollTo({
            top: contenedor.offsetTop - 120,
            behavior: 'smooth'
        });

    }, 300);

}