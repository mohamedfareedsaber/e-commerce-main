import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

function SiteSection({
  title,
  section,
}: {
  title: string;
  section: { title: string; value: string; svgLink?: string }[];
}) {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="font-bold uppercase">{title}</div>
      {section.map((section, id) => (
        <Link
          href={section.value as Route}
          key={id}
          className="capitalize text-text/70 flex"
        >
          {section.svgLink && (
            <Image src={section.svgLink} alt="link icon" width="40" height="40"/>
          )}
          {section.title}
        </Link>
      ))}
    </div>
  );
}

interface Props {
  sections: {
    [key: string]: {
      title: string;
      value: string;
      svgLink?: string;
    }[];
  };
}

export default function SiteMap({ sections }: Props) {
  return (
    <div className="flex w-full items-center justify-around">
      {Object.entries(sections).map(([title, section], id) => (
        <SiteSection key={id} title={title} section={section} />
      ))}
    </div>
  );
}
