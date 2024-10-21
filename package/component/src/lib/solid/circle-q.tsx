
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=solid circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 256c0 44.2 35.8 80 80 80c13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37c0-44.2-35.8-80-80-80s-80 35.8-80 80zm208 0c0 26.7-8.2 51.4-22.1 71.9L377 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15.1-15.1c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </Icon>
);

export default CircleQ;