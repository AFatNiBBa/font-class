
import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-solid circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 204.1l0-44.1 256 0 0 44.1L256 254.8 128 204.1zm133.9 82.8L384 238.5 384 352l-256 0 0-113.5 122.1 48.4 5.9 2.3 5.9-2.3z" />
    </Icon>
);

export default CircleEnvelope;