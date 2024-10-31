
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=sharp-regular circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-336c44.2 0 80 35.8 80 80c0 12.7-3 24.7-8.2 35.3L299.5 256l-61.5 0 56.2 70.3c-11.4 6.2-24.4 9.7-38.3 9.7c-44.2 0-80-35.8-80-80s35.8-80 80-80zm0 208c25.2 0 48.7-7.3 68.6-19.9L340.5 384l61.5 0-42.3-52.9C375 310 384 284.1 384 256c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default CircleQ;