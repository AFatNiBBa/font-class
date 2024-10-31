
import { Icon } from "../../index";

/**
 * A component that renders the `circle-r` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=regular circle-r}
 * @preview ![circle-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-r.svg)
 */
const CircleR: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24l0 112 0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 44 0 64.8 86.4c8 10.6 23 12.8 33.6 4.8s12.8-23 4.8-33.6L309.8 285c33.6-9.5 58.2-40.4 58.2-77c0-44.2-35.8-80-80-80l-104 0zm80 112l-56 0 0-64 80 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0z" />
    </Icon>
);

export default CircleR;