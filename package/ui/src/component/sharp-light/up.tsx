
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=sharp-light up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 240l0 32 0 176 96 0 0-176 0-32 32 0 80 0 0-2.7L192 77.2 32 237.2l0 2.7 80 0 32 0zM0 224L169.4 54.6 192 32l22.6 22.6L384 224l0 16 0 32-32 0-48 0-32 0 0 32 0 144 0 32-32 0-96 0-32 0 0-32 0-144 0-32-32 0-48 0L0 272l0-32 0-16z" />
    </Icon>
);

export default Up;