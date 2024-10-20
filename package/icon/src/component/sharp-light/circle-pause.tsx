
import { Icon } from "../../index";

/**
 * A component that renders the `circle-pause` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-pause?s=sharp-light circle-pause}
 * @preview ![circle-pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-pause.svg)
 */
const CirclePause: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-80l0 160 0 16-32 0 0-16 0-160 0-16 32 0 0 16zm96 0l0 160 0 16-32 0 0-16 0-160 0-16 32 0 0 16z" />
    </Icon>
);

export default CirclePause;