
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-thin circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144-96l224 0 16 0 0 16 0 160 0 16-16 0-224 0-16 0 0-16 0-160 0-16 16 0zm224 39.5l0-23.5-224 0 0 23.5 3.9 2.2L256 262.8l108.1-61.1 3.9-2.2zm0 18.4L259.9 279l-3.9 2.2-3.9-2.2L144 217.9 144 336l224 0 0-118.1z" />
    </Icon>
);

export default CircleEnvelope;