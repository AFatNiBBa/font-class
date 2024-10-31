
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=light circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM157.1 134.8c-4-5.7-11.3-8.2-17.9-6.1S128 137 128 144l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-173.2 82.9 118.4c3 4.3 7.9 6.8 13.1 6.8s10.1-2.5 13.1-6.8L352 194.8 352 368c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-7-4.5-13.2-11.2-15.3s-13.9 .4-17.9 6.1L256 276.1 157.1 134.8z" />
    </Icon>
);

export default CircleM;