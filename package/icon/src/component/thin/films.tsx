
import { Icon } from "../../index";

/**
 * A component that renders the `films` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/films?s=thin films}
 * @preview ![films](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/films.svg)
 */
const Films: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 288l0-72 224 0 0 72 0 80-224 0 0-80zm0-88l0-72 0-80 224 0 0 80 0 72-224 0zm240 80l0-64 96 0 0 64-96 0zm0-144l96 0 0 64-96 0 0-64zm112 72l0-8 0-64 0-8 0-8 0-24c0-35.3-28.7-64-64-64l-48 0-8 0-8 0L224 32l-8 0-8 0-48 0c-35.3 0-64 28.7-64 64l0 24 0 8 0 8 0 64 0 8 0 8 0 64 0 8 0 8 0 24c0 35.3 28.7 64 64 64l48 0 8 0 8 0 224 0 8 0 8 0 48 0c35.3 0 64-28.7 64-64l0-24 0-8 0-8 0-64 0-8zM560 96l0 24-96 0 0-72 48 0c26.5 0 48 21.5 48 48zM160 48l48 0 0 72-96 0 0-24c0-26.5 21.5-48 48-48zm-48 88l96 0 0 64-96 0 0-64zm96 80l0 64-96 0 0-64 96 0zM112 320l0-24 96 0 0 72-48 0c-26.5 0-48-21.5-48-48zm400 48l-48 0 0-72 96 0 0 24c0 26.5-21.5 48-48 48zM0 192L0 416c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default Films;