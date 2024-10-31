
import { Icon } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=thin circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24l0 144 0 80c0 4.4 3.6 8 8 8s8-3.6 8-8l0-72 96 0c48.6 0 88-39.4 88-88s-39.4-88-88-88l-88 0zm88 160l-96 0 0-136c0-4.4 3.6-8 8-8l88 0c39.8 0 72 32.2 72 72s-32.2 72-72 72z" />
    </Icon>
);

export default CircleP;