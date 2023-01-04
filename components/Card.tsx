import styles from "./card.module.css";

export type CardProps = {
  title: string;
  description: string;
};
export default function Card({ title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500/80 dark:text-gray-300 font-semibold">
        {description}
      </p>
      <div className="mt-auto" />
      <button className="button-primary mt-4">Open</button>
    </div>
  );
}
