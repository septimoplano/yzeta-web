import LegalLayout from './LegalLayout';
import { EMAIL } from '../data';

export default function Terminos() {
  return (
    <LegalLayout title="Términos y condiciones" updated="junio 2026">
      <p>
        Estos términos regulan la contratación de los servicios de desarrollo y consultoría
        digital ofrecidos por YZETA Consultora Digital ("YZETA", "nosotros") a través de este
        sitio y de los canales de contacto publicados. Al solicitar una cotización o contratar
        un servicio, aceptas las condiciones descritas a continuación.
      </p>

      <h3>1. Servicios</h3>
      <p>
        YZETA ofrece diseño y desarrollo de sitios web, landing pages, agendamiento online y
        tiendas online (e-commerce), entre otros servicios digitales. El alcance específico de
        cada proyecto se define en una propuesta escrita previa, que incluye entregables, plazos
        y precio fijo acordado antes de iniciar el trabajo.
      </p>

      <h3>2. Precios y pagos</h3>
      <p>
        Los valores publicados están expresados en pesos chilenos (CLP). Salvo acuerdo distinto,
        el dominio está incluido el primer año y la mantención mensual se cobra a partir del
        segundo mes. Las condiciones de pago se detallan en cada propuesta.
      </p>

      <h3>3. Plazos de entrega</h3>
      <p>
        Los plazos estimados (habitualmente 5 a 10 días hábiles según el servicio) se confirman
        en la propuesta y pueden variar según la entrega oportuna de contenidos, accesos y
        aprobaciones por parte del cliente.
      </p>

      <h3>4. Responsabilidades del cliente</h3>
      <p>
        El cliente es responsable de entregar la información, textos, imágenes y accesos
        necesarios, así como de contar con los derechos sobre el material proporcionado.
      </p>

      <h3>5. Propiedad y mantención</h3>
      <p>
        Una vez liquidado el pago acordado, el sitio entregado queda a disposición del cliente.
        Los servicios de mantención, soporte y alojamiento se rigen por las condiciones
        vigentes al momento de la contratación.
      </p>

      <h3>6. Contacto</h3>
      <p>
        Para cualquier consulta sobre estos términos, escríbenos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
