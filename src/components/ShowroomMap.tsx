import { contactInfo, getMapEmbedUrl, getMapsDirectionsUrl } from "@/lib/contactInfo";

export function ShowroomMap({
  title,
  directionsLabel,
}: {
  title: string;
  directionsLabel: string;
}) {
  const embedUrl = getMapEmbedUrl();
  const directionsUrl = getMapsDirectionsUrl();

  return (
    <div className="showroom-map">
      <iframe
        title={title}
        src={embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        className="showroom-map-link text-body-sm"
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {directionsLabel} — {contactInfo.addressLine1}, {contactInfo.addressLine2}
      </a>
    </div>
  );
}
