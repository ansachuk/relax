import css from "./Container.module.scss";

type Props = { children: React.ReactNode };

export default function Container({ children }: Props) {
	return <div className={css.container}>{children}</div>;
}
