
import { Icon } from "../../index";

/**
 * A component that renders the `circle-e` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=light circle-e}
 * @preview ![circle-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-e.svg)
 */
const CircleE: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 128c-17.7 0-32 14.3-32 32l0 96 0 96c0 17.7 14.3 32 32 32l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0 0-80 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0 0-80 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0z" />
    </Icon>
);

export default CircleE;