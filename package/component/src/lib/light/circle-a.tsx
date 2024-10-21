
import { Icon } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=light circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-400c-6.1 0-11.6 3.4-14.3 8.8l-112 224c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2L185.9 304l140.2 0 27.6 55.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-112-224c-2.7-5.4-8.3-8.8-14.3-8.8zm0 51.8L310.1 272l-108.2 0L256 163.8z" />
    </Icon>
);

export default CircleA;