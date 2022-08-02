import { useRouter } from "next/router";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { useDelay } from "@/app/hooks/delay";
import { useSearchByNameMutation } from "@/app/store";

import styles from "./searchBar.module.scss";

export const SearchBar: FC = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>(String(router.query?.q || ""));
  const [activeHelper, setActiveHelper] = useState<boolean>(false);
  const delay = useDelay(value);

  const [setBeer, { data: searchBeers, isLoading }] = useSearchByNameMutation();

  const showHelper = (): void => setActiveHelper(true);
  const hiddenHelper = (): void => setActiveHelper(false);

  const handlerChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const q = e.target.value;

    router.replace({
      query: { ...router.query, q },
    });

    setValue(e.target.value);
    showHelper();
  };

  const handlerGoToCard = (id: number): void => {
    router.push(`/beer/${id}`);
    hiddenHelper();
  };

  useEffect(() => {
    if (!delay.length) {
      setValue("");
      hiddenHelper();
      return;
    }

    setBeer({ q: delay });
  }, [delay, setBeer]);

  return (
    <div className={styles.container}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3 z-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          placeholder="Search"
          className={styles.input}
          onChange={handlerChangeValue}
          value={value}
        />
      </div>

      {activeHelper && (
        <div className="font-italic">
          <div className={styles.hiddenHelperClose} onClick={hiddenHelper} />
          <ol className={styles.searchHelper}>
            {isLoading ? (
              "Loading..."
            ) : searchBeers && searchBeers?.length > 0 ? (
              <>
                {searchBeers?.map((beer) => (
                  <li
                    key={beer.id}
                    onClick={() => handlerGoToCard(beer.id)}
                    className={styles.searchHelperItem}
                  >
                    {beer.name}
                  </li>
                ))}
              </>
            ) : (
              <li>Nothing found</li>
            )}
          </ol>
        </div>
      )}
    </div>
  );
};
