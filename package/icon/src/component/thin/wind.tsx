
import { Icon } from "../../index";

/**
 * A component that renders the `wind` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=thin wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 8c0 4.4 3.6 8 8 8l64 0c39.8 0 72 32.2 72 72s-32.2 72-72 72L8 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l352 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L296 0c-4.4 0-8 3.6-8 8zm64 400c0 4.4 3.6 8 8 8l68 0c46.4 0 84-37.6 84-84s-37.6-84-84-84L8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l420 0c37.6 0 68 30.4 68 68s-30.4 68-68 68l-68 0c-4.4 0-8 3.6-8 8zM104 512l64 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L8 336c-4.4 0-8 3.6-8 8s3.6 8 8 8l160 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-64 0c-4.4 0-8 3.6-8 8s3.6 8 8 8z" />
    </Icon>
);

export default Wind;