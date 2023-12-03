import css from "./Map.module.scss";

export default function Map() {
	return (
		<iframe
			title="Our location"
			className={css.map}
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7083.775933338466!2d30.910746462569364!3d50.373578518256295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e7087ffa13ed%3A0x778f711598c3f690!2z0KDQtdC70LDQutGBINCa0L7QvNC_0LvQtdC60YE!5e0!3m2!1suk!2sua!4v1701240863275!5m2!1suk!2sua"
			loading="lazy"
		></iframe>
	);
}
