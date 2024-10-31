
import { Icon } from "../../index";

/**
 * A component that renders the `circle-d` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-d?s=sharp-light circle-d}
 * @preview ![circle-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-d.svg)
 */
const CircleD: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128l-16 0 0 16 0 224 0 16 16 0 80 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-80 0zm80 224l-64 0 0-192 64 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default CircleD;