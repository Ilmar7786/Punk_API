import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

import { Spinner } from "@/app/components/spinner";
import { FetchError } from "@/app/components/FetchError";
import { IBeer, useGetBeerByIdQuery } from "@/app/store";

import defaultStyle from "@/styles/default.module.scss";
import styles from "@/styles/beerPage.module.scss";

const Beer: FC<IBeer> = ({ id }) => {
  const router = useRouter();
  const { isError, data, isLoading } = useGetBeerByIdQuery({ id });

  const beerResponse = { ...data };
  const { description, name, image_url, tagline, abv, food_pairing } =
    beerResponse;

  const handleBack = () => router.back();

  if (isLoading) return <Spinner />;
  if (isError) return <FetchError />;
  return (
    <div className={styles.container}>
      <Head>
        <title>PUNK API | {name}</title>
        <meta name="description" content={description} />
      </Head>

      <button onClick={handleBack} className={defaultStyle.btn}>
        Назад
      </button>

      <div className={styles.img}>
        <Image
          src={image_url || "/images/defaultAlcohol.png"}
          alt={name}
          title={name}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="my-4">
        <span className="font-medium mr-2">Name:</span>
        {name}
      </div>
      <div className="font-italic my-4">
        <span className="font-medium mr-2">Tagline: </span>
        {tagline}
      </div>
      <div className="font-italic my-4">
        <span className="font-medium mr-2">Description: </span>
        {description}
      </div>
      <div className="font-italic my-4">
        <span className="font-medium mr-2">Alcohol strength: </span>
        {abv}%
      </div>
      <div className="font-italic my-4">
        <span className="font-medium mr-2">Food pairing: </span>
        {food_pairing}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: {
  params: { id: number };
}) => {
  return {
    props: {
      id: Number(context.params.id),
    },
  };
};
export default Beer;
