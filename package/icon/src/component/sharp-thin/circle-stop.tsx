
import { Icon } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=sharp-thin circle-stop}
 * @preview ![circle-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-stop.svg)
 */
const CircleStop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160-96l16 0 160 0 16 0 0 16 0 160 0 16-16 0-160 0-16 0 0-16 0-160 0-16zm16 16l0 160 160 0 0-160-160 0z" />
    </Icon>
);

export default CircleStop;