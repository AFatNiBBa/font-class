
import { Icon } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=sharp-light circle-stop}
 * @preview ![circle-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-stop.svg)
 */
const CircleStop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160-96l32 0 128 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-128 0-32zm32 32l0 128 128 0 0-128-128 0z" />
    </Icon>
);

export default CircleStop;