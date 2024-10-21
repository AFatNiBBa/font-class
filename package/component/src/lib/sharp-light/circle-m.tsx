
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=sharp-light circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 144l0 224 0 16 32 0 0-16 0-173.2 82.9 118.4L256 331.9l13.1-18.7L352 194.8 352 368l0 16 32 0 0-16 0-224 0-16-24.3 0-4.8 6.8L256 276.1 157.1 134.8l-4.8-6.8L128 128l0 16z" />
    </Icon>
);

export default CircleM;