
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=light circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192 96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0-112 0z" />
    </Icon>
);

export default CircleT;