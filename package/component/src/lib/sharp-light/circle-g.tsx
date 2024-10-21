
import { Icon } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=sharp-light circle-g}
 * @preview ![circle-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-g.svg)
 */
const CircleG: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 256c0-53 43-96 96-96c24.6 0 47 9.2 64 24.4l11.9 10.7 21.3-23.8-11.9-10.7C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128l0-16-16 0-80 0-16 0 0 32 16 0 62.7 0c-7.6 45.4-47.1 80-94.7 80c-53 0-96-43-96-96z" />
    </Icon>
);

export default CircleG;