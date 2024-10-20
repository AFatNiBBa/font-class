
import { Icon } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=sharp-light circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 144l0-16-32 0 0 16 0 224 0 16 16 0 160 0 16 0 0-32-16 0-144 0 0-208z" />
    </Icon>
);

export default CircleL;