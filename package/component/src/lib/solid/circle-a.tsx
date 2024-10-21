
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=solid circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-400c9.1 0 17.4 5.1 21.5 13.3l104 208c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L321.2 320l-130.3 0-17.4 34.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l104-208c4.1-8.1 12.4-13.3 21.5-13.3zm0 77.7L214.8 272l82.3 0L256 189.7z" />
    </Icon>
);

export default CircleA;