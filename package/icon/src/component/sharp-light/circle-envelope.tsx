
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-light circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160-96l192 0 32 0 0 32 0 128 0 32-32 0-192 0-32 0 0-32 0-128 0-32 32 0zm192 48.2l0-16.2-192 0 0 16.2 96 47.4 96-47.4zm0 35.7l-88.9 43.9-7.1 3.5-7.1-3.5L160 243.9l0 76.1 192 0 0-76.1z" />
    </Icon>
);

export default CircleEnvelope;