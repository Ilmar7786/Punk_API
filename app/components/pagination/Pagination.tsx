import { FC } from "react";

import styles from "./pagination.module.scss";

interface PaginationProps {
  next: () => void;
  previous: () => void;
}

export const Pagination: FC<PaginationProps> = ({ next, previous }) => {
  const first = 1;
  const last = 25;

  return (
    <div className={styles.pagination}>
      <div className={styles.previous} onClick={previous}>
        {"<"}
      </div>
      <div className={styles.count}>{`${first}-${last}`}</div>
      <div className={styles.next} onClick={next}>
        {">"}
      </div>
    </div>
  );
};
