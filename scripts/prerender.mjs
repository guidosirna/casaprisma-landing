/**
 * Static SEO prerender — injects crawlable HTML content into each route's index.html.
 * No browser/Puppeteer needed. Works on any CI environment.
 *
 * For each route, it:
 * 1. Copies dist/index.html to dist/<route>/index.html
 * 2. Injects a <noscript> block + hidden semantic HTML with all page content
 * 3. Updates <title>, meta description, canonical, and OG tags
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE = 'https://casaprisma.com';

const pages = [
  {
    route: '/',
    title: 'Casa Prisma — Alquiler Loft Creativo en Gràcia, Barcelona | Coworking, Fotografía, Arte, Eventos',
    description: 'Alquila Casa Prisma: loft creativo de 175m² en Gràcia, Barcelona. Espacio para coworking, sesiones fotográficas, filmaciones, exposiciones de arte y eventos privados. Luz natural, equipamiento profesional. Reserva ahora.',
    content: `
      <h1>Casa Prisma — Loft Creativo en Gràcia, Barcelona</h1>
      <h2>175m² de loft versátil en Gràcia, Barcelona</h2>
      <p>Coworking · Fotografía · Filmaciones · Eventos · Arte</p>
      <h2>Un loft de 175m² que se adapta a tu visión creativa</h2>
      <p>Casa Prisma es un espacio multifuncional diseñado para artistas, fotógrafos, cineastas, coworkers y creativos. Grandes ventanales con luz natural, equipamiento profesional y una estética que se adapta a cualquier proyecto.</p>
      <h2>Por qué elegir Casa Prisma</h2>
      <ul>
        <li><strong>Gràcia, Barcelona</strong> — Ubicación privilegiada en el barrio más creativo de Barcelona.</li>
        <li><strong>Luz natural</strong> — Ventanales amplios que inundan los 175m² de luz natural.</li>
        <li><strong>Equipamiento pro</strong> — Sonido profesional e iluminación técnica de alta calidad.</li>
        <li><strong>Espacio flexible</strong> — Se transforma según tu proyecto: estudio, galería, cowork o eventos.</li>
        <li><strong>Coffee corner</strong> — Cocina equipada y zona de descanso para largas jornadas.</li>
        <li><strong>WiFi alta velocidad</strong> — Fibra óptica para videollamadas y trabajo remoto sin cortes.</li>
      </ul>
      <h2>Infinitas posibilidades</h2>
      <p>Coworking, fotografía, filmaciones, exposiciones de arte, eventos privados, producción musical, workshops y talleres creativos.</p>
      <h2>Tu próximo proyecto merece un espacio excepcional</h2>
      <p>Reserva Casa Prisma para fotografía, filmaciones, eventos, coworking o cualquier proyecto creativo en Barcelona.</p>
      <nav>
        <a href="/cowork">Coworking en Barcelona</a>
        <a href="/produccion">Estudio de fotografía</a>
        <a href="/galeria-arte">Galería de arte</a>
        <a href="/eventos">Eventos privados</a>
        <a href="/estudio-musical">Estudio musical</a>
        <a href="/workshops">Workshops y talleres</a>
      </nav>
      <p>Gràcia, Barcelona · Lunes a Domingo: 08:00 – 23:00 · hola@casaprisma.com</p>
    `,
  },
  {
    route: '/cowork',
    title: 'Coworking Creativo Barcelona — Alquiler Oficina Gràcia | Casa Prisma',
    description: 'Espacio de coworking creativo en Gràcia, Barcelona. Loft de 175m² con luz natural, WiFi de alta velocidad y cocina equipada. Alquiler flexible por día, semana o mes para freelancers, startups y equipos creativos.',
    content: `
      <h1>Coworking Creativo en Gràcia, Barcelona — Casa Prisma</h1>
      <h2>Tu oficina en Gràcia</h2>
      <p>175m² de espacio compartido con luz natural y ambiente colaborativo en el barrio más creativo de Barcelona.</p>
      <h2>Un cowork diferente</h2>
      <ul>
        <li><strong>Ambiente Colaborativo</strong> — Espacio abierto que fomenta la creatividad y las conexiones entre profesionales creativos.</li>
        <li><strong>Luz Natural</strong> — Grandes ventanales que inundan el espacio de luz natural durante todo el día.</li>
        <li><strong>WiFi Alta Velocidad</strong> — Conexión de fibra óptica para que tu trabajo fluya sin interrupciones.</li>
        <li><strong>Coffee Corner</strong> — Cocina equipada y zona de descanso para recargar energías.</li>
        <li><strong>Flexibilidad Total</strong> — Adapta el espacio según tus necesidades: individual, equipo o eventos.</li>
        <li><strong>Ubicación Premium</strong> — En Gràcia, el barrio más creativo y bien conectado de Barcelona.</li>
      </ul>
      <h2>Planes flexibles</h2>
      <ul>
        <li><strong>Día Completo</strong> — 60€/día. Acceso 9:00–22:00, WiFi alta velocidad, Coffee corner.</li>
        <li><strong>Semanal</strong> — 250€/semana. Acceso 8:00–23:00, WiFi, Coffee corner, Llave personal.</li>
        <li><strong>Mensual</strong> — 800€/mes. Acceso completo 8:00–23:00, WiFi, Coffee corner, Llave personal, Almacenamiento.</li>
      </ul>
      <p><a href="/">Volver a Casa Prisma</a></p>
    `,
  },
  {
    route: '/produccion',
    title: 'Estudio Fotografía y Filmaciones Barcelona — Alquiler Espacio | Casa Prisma',
    description: 'Alquiler de estudio fotográfico y espacio para filmaciones en Gràcia, Barcelona. Loft de 175m² con luz natural, equipamiento profesional y set versátil. Ideal para sesiones de fotos, rodajes, producción audiovisual y contenido digital.',
    content: `
      <h1>Estudio de Fotografía y Filmaciones en Barcelona — Casa Prisma</h1>
      <h2>Fotografía y Filmaciones</h2>
      <p>Estudio versátil de 175m² con luz natural y equipamiento profesional para tus producciones fotográficas y audiovisuales.</p>
      <h2>Todo para tu producción</h2>
      <ul>
        <li><strong>Luz Natural</strong> — Amplios ventanales que proporcionan luz natural suave, ideal para fotografía y video.</li>
        <li><strong>Set Profesional</strong> — Fondos intercambiables, paredes neutras y múltiples ambientes.</li>
        <li><strong>Equipamiento</strong> — Iluminación LED profesional, softboxes, trípodes y más.</li>
        <li><strong>Espacio Versátil</strong> — 175m² adaptables: desde retratos íntimos hasta rodajes con equipos grandes.</li>
        <li><strong>Localización</strong> — En el corazón de Gràcia, con fácil acceso y zona de carga.</li>
        <li><strong>Catering</strong> — Cocina equipada para catering de producción y zona de descanso.</li>
      </ul>
      <h2>Crea contenido que impacte</h2>
      <p>Fotografía: Retratos, editoriales, producto, e-commerce, lookbooks, corporativa. Video: Reels, TikTok, YouTube, corporativos, publicitario. Cine: Videoclips, cortometrajes, documentales, arte digital.</p>
      <p><a href="/">Volver a Casa Prisma</a></p>
    `,
  },
  {
    route: '/galeria-arte',
    title: 'Galería de Arte Barcelona — Alquiler Espacio Exposiciones Gràcia | Casa Prisma',
    description: 'Alquiler de galería de arte y espacio para exposiciones temporales en Gràcia, Barcelona. Loft de 175m² con paredes neutras, iluminación profesional y sistema de colgado. Ideal para vernissages, artistas emergentes y showcases artísticos.',
    content: `
      <h1>Galería de Arte en Barcelona — Casa Prisma</h1>
      <h2>Galería de Arte</h2>
      <p>Exhibe tu obra en un loft único de 175m² con iluminación profesional y paredes neutras en el barrio más artístico de Barcelona.</p>
      <h2>Tu galería ideal</h2>
      <ul>
        <li><strong>Paredes Neutras</strong> — Muros blancos perfectos para resaltar cualquier obra artística.</li>
        <li><strong>Iluminación Profesional</strong> — Sistema LED regulable para destacar cada pieza.</li>
        <li><strong>Sistema de Colgado</strong> — Rieles profesionales para obras de diferentes tamaños.</li>
        <li><strong>Capacidad Flexible</strong> — Espacio para hasta 80 personas en inauguraciones y vernissages.</li>
        <li><strong>Ubicación Artística</strong> — En Gràcia, rodeado de galerías y espacios creativos.</li>
      </ul>
      <h2>Tipos de exposiciones</h2>
      <p>Exposiciones individuales, exposiciones colectivas, pop-up galleries, showcases digitales con arte interactivo y proyección HD.</p>
      <p><a href="/">Volver a Casa Prisma</a></p>
    `,
  },
  {
    route: '/eventos',
    title: 'Alquiler Espacio Eventos Privados Barcelona — Loft Gràcia | Casa Prisma',
    description: 'Alquiler de loft para eventos privados en Gràcia, Barcelona. Espacio de 175m² ideal para cenas privadas, presentaciones de marca, celebraciones exclusivas y eventos corporativos. Venue único con catering y coordinación.',
    content: `
      <h1>Eventos Privados en Barcelona — Casa Prisma</h1>
      <h2>Celebraciones Únicas</h2>
      <p>Un loft único de 175m² para tus celebraciones más especiales. Cenas privadas, presentaciones de marca y eventos exclusivos en Gràcia.</p>
      <h2>Celebraciones memorables</h2>
      <ul>
        <li><strong>Cenas Privadas</strong> — Hasta 40 invitados en un ambiente exclusivo y acogedor con decoración personalizada.</li>
        <li><strong>Celebraciones Especiales</strong> — Cumpleaños, aniversarios y fiestas en un loft único.</li>
        <li><strong>Eventos Corporativos</strong> — Presentaciones de marca, lanzamientos de producto y networking.</li>
        <li><strong>Catering Incluido</strong> — Menús personalizados, servicio de camareros, barra libre opcional.</li>
        <li><strong>Música y Ambiente</strong> — Sistema de sonido profesional, iluminación ambiental y conciertos íntimos.</li>
        <li><strong>Decoración Personalizada</strong> — Ambientación temática a medida.</li>
      </ul>
      <h2>Todo incluido</h2>
      <p>Catering y bar, decoración temática, audiovisual con proyección HD, coordinación completa del evento.</p>
      <p><a href="/">Volver a Casa Prisma</a></p>
    `,
  },
  {
    route: '/estudio-musical',
    title: 'Estudio Musical Barcelona — Grabación y Producción Gràcia | Casa Prisma',
    description: 'Alquiler de estudio musical profesional en Gràcia, Barcelona. Espacio de 175m² con equipamiento de sonido profesional, grabación multipista y producción musical.',
    content: `
      <h1>Estudio Musical en Barcelona — Casa Prisma</h1>
      <h2>Graba y Produce</h2>
      <p>Estudio profesional de 175m² con equipamiento de alta calidad para grabación, producción y ensayos en el corazón de Gràcia.</p>
      <h2>Tu estudio completo</h2>
      <ul>
        <li><strong>Microfonía Premium</strong> — Micrófonos de condensador y dinámicos de alta gama.</li>
        <li><strong>Monitoreo Profesional</strong> — Auriculares y monitores de estudio de referencia.</li>
        <li><strong>Sistema de Sonido</strong> — Amplificadores y altavoces de alta fidelidad.</li>
        <li><strong>Mesa de Mezclas</strong> — Consola digital con múltiples canales y efectos integrados.</li>
        <li><strong>Instrumentos</strong> — Piano digital, amplificadores y percusión básica disponibles.</li>
        <li><strong>Software DAW</strong> — Software profesional para grabación, edición y producción.</li>
      </ul>
      <h2>Crea tu música</h2>
      <p>Grabación multipista, producción y mezcla profesional, masterización, ensayos con amplificadores, podcasts con tratamiento acústico.</p>
      <p><a href="/">Volver a Casa Prisma</a></p>
    `,
  },
  {
    route: '/workshops',
    title: 'Alquiler Sala Workshops Barcelona — Talleres Creativos Gràcia | Casa Prisma',
    description: 'Alquiler de sala para workshops y talleres creativos en Gràcia, Barcelona. Loft de 175m² con proyección HD, material didáctico y cocina equipada. Ideal para masterclasses, charlas y formaciones.',
    content: `
      <h1>Workshops y Talleres Creativos en Barcelona — Casa Prisma</h1>
      <h2>Aprende Creando</h2>
      <p>Un loft íntimo de 175m² perfecto para masterclasses, talleres creativos y sesiones de formación en grupo reducido en Gràcia.</p>
      <h2>Aprende en un entorno único</h2>
      <ul>
        <li><strong>Grupos Íntimos</strong> — Hasta 20 personas en formato círculo o 15 en dinámicas de taller.</li>
        <li><strong>Proyección HD</strong> — Sistema de proyección profesional y pantalla de gran formato.</li>
        <li><strong>Material Didáctico</strong> — Pizarras, flipcharts y material para dinámicas de grupo.</li>
        <li><strong>Coffee Break</strong> — Cocina equipada para pausas y networking.</li>
        <li><strong>Tecnología Integrada</strong> — WiFi de alta velocidad y conectividad completa.</li>
      </ul>
      <h2>Tipos de sesiones</h2>
      <p>Masterclasses con expertos (máx. 15), workshops creativos hands-on (máx. 12), charlas inspiracionales (máx. 20), retiros creativos para equipos (máx. 15).</p>
      <p><a href="/">Volver a Casa Prisma</a></p>
    `,
  },
];

function prerender() {
  console.log('\n🔍 Injecting SEO content into route HTML files...\n');

  const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

  for (const page of pages) {
    let html = template;

    // Update <title>
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

    // Update meta description
    html = html.replace(
      /(<meta name="description" content=")[^"]*(">)/,
      `$1${page.description}$2`
    );

    // Update canonical
    const canonical = `${SITE}${page.route === '/' ? '' : page.route}`;
    html = html.replace(
      /(<link rel="canonical" href=")[^"]*(">)/,
      `$1${canonical}$2`
    );

    // Update OG tags
    html = html.replace(
      /(<meta property="og:title" content=")[^"]*(">)/,
      `$1${page.title}$2`
    );
    html = html.replace(
      /(<meta property="og:description" content=")[^"]*(">)/,
      `$1${page.description}$2`
    );
    html = html.replace(
      /(<meta property="og:url" content=")[^"]*(">)/,
      `$1${canonical}$2`
    );

    // Update Twitter tags
    html = html.replace(
      /(<meta name="twitter:title" content=")[^"]*(">)/,
      `$1${page.title}$2`
    );
    html = html.replace(
      /(<meta name="twitter:description" content=")[^"]*(">)/,
      `$1${page.description}$2`
    );

    // Inject SEO content before <div id="root"> as a hidden semantic block
    // Crawlers read this; JS replaces it on hydration
    const seoBlock = `
    <!-- SEO pre-rendered content for crawlers -->
    <div id="seo-content" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden" aria-hidden="true">
      ${page.content.trim()}
    </div>
    <noscript>
      <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif">
        ${page.content.trim()}
        <p style="margin-top:40px;color:#666">Casa Prisma · Gràcia, Barcelona · hola@casaprisma.com · Lunes a Domingo: 08:00–23:00</p>
      </div>
    </noscript>`;

    html = html.replace('<div id="root">', `${seoBlock}\n    <div id="root">`);

    // Write to correct path
    const outDir = page.route === '/' ? DIST : join(DIST, page.route);
    const outFile = join(outDir, 'index.html');

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    writeFileSync(outFile, html);
    console.log(`  ✓ ${page.route} → ${outFile.replace(DIST, 'dist')}`);
  }

  console.log(`\n✅ SEO content injected into ${pages.length} routes.\n`);
}

prerender();
