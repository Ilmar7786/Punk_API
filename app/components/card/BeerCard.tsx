import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";

import { IBeer } from "@/app/store";
import styles from "@/styles/beerCard.module.scss";

export const BeerCard: FC<IBeer> = ({ id, image_url, name, description }) => {
  const restrictContent = useRestrictContent(140);

  const router = useRouter();
  return (
    <article
      className={styles.container}
      onClick={() => router.push(`beer/${id}`)}
    >
      <Image
        src={image_url || "/images/defaultAlcohol.png"}
        alt={name}
        title={name}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        className="mb-3"
      />

      <h2 className={styles.title}>{name}</h2>
      <div>{restrictContent(description)}</div>
    </article>
  );
};

function useRestrictContent(symbols: number) {
  return function (str: string) {
    return `${str.substring(0, symbols)}${
      str.length > symbols && "..."
    }`.trim();
  };
}
