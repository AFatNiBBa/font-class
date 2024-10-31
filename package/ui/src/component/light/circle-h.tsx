
import { Icon } from "../../index";

/**
 * A component that renders the `circle-h` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-h?s=light circle-h}
 * @preview ![circle-h](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-h.svg)
 */
const CircleH: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM368 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96-160 0 0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96 160 0 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112 0-112z" />
    </Icon>
);

export default CircleH;