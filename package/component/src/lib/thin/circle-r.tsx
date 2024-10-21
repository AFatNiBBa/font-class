
import { Icon } from "../../index";

/**
 * A component that renders the `circle-r` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=thin circle-r}
 * @preview ![circle-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-r.svg)
 */
const CircleR: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24l0 128 0 96c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 92.3 0 77.6 93.1c2.8 3.4 7.9 3.9 11.3 1s3.9-7.9 1-11.3l-70.4-84.4c36.6-7.3 64.2-39.7 64.2-78.4c0-44.2-35.8-80-80-80l-88 0zm88 144l-96 0 0-120c0-4.4 3.6-8 8-8l88 0c35.3 0 64 28.7 64 64s-28.7 64-64 64z" />
    </Icon>
);

export default CircleR;