
import { Icon } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=light circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-160l-64 0 0-192 64 0c53 0 96 43 96 96s-43 96-96 96zM190.8 128c-17 0-30.8 13.8-30.8 30.8l0 194.5c0 17 13.8 30.8 30.8 30.8l65.2 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-65.2 0z" />
    </Icon>
);

export default CircleD;