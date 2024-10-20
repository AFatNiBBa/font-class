
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=regular circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-400c-9.1 0-17.4 5.1-21.5 13.3l-104 208c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7L190.8 320l130.3 0 17.4 34.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-104-208c-4.1-8.1-12.4-13.3-21.5-13.3zm0 77.7L297.2 272l-82.3 0L256 189.7z" />
    </Icon>
);

export default CircleA;