import LegalLayout from './LegalLayout';
import { EMAIL } from '../data';

export default function Privacidad() {
  return (
    <LegalLayout title="Política de privacidad" updated="junio 2026">
      <p>
        En YZETA Consultora Digital respetamos tu privacidad. Esta política explica qué datos
        recopilamos, con qué fin y cómo los protegemos, en conformidad con la Ley N° 19.628
        sobre protección de la vida privada.
      </p>

      <h3>1. Datos que recopilamos</h3>
      <p>
        Recopilamos únicamente los datos que nos entregas voluntariamente al contactarnos por
        WhatsApp, correo electrónico u otros canales: nombre, teléfono, correo y la información
        que compartas sobre tu negocio o proyecto.
      </p>

      <h3>2. Uso de los datos</h3>
      <p>
        Usamos tus datos solo para responder consultas, elaborar propuestas y prestar los
        servicios contratados. No vendemos ni cedemos tu información a terceros con fines
        comerciales.
      </p>

      <h3>3. Herramientas de terceros</h3>
      <p>
        Este sitio puede utilizar servicios de medición como Google Analytics para entender el
        tráfico de forma agregada y anónima. Estos servicios se rigen por sus propias políticas
        de privacidad.
      </p>

      <h3>4. Conservación y seguridad</h3>
      <p>
        Conservamos tus datos durante el tiempo necesario para los fines descritos y aplicamos
        medidas razonables para protegerlos contra accesos no autorizados.
      </p>

      <h3>5. Tus derechos</h3>
      <p>
        Puedes solicitar el acceso, rectificación o eliminación de tus datos en cualquier
        momento escribiéndonos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
