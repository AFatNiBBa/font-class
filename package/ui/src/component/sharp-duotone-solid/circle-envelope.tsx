
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-duotone-solid circle-envelope}
 * @preview ![circle-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-envelope.svg)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l256 0 0 44.1L256 254.8 128 204.1l0-44.1zm0 78.5l122.1 48.4 5.9 2.3 5.9-2.3L384 238.5 384 352l-256 0 0-113.5z" />
        <path d="M384 160l-256 0 0 44.1 128 50.7 128-50.7 0-44.1zm0 78.5L261.9 286.9l-5.9 2.3-5.9-2.3L128 238.5 128 352l256 0 0-113.5z" />
    </Icon>
);

export default CircleEnvelope;