
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=sharp-thin circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160.2 152l20.1 0L256 251.5 331.7 152l20.1 0L271.6 257.4l48.4 0 8 0 0 16-8 0-56 0 0 45.6 56 0 8 0 0 16-8 0-56 0 0 41 0 8-16 0 0-8 0-41-56 0-8 0 0-16 8 0 56 0 0-45.6-56 0-8 0 0-16 8 0 48.4 0L160.2 152z" />
    </Icon>
);

export default CircleYen;