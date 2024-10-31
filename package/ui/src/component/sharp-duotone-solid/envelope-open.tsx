
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=sharp-duotone-solid envelope-open}
 * @preview ![envelope-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/envelope-open.svg)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224L256 80 448 224l0 22.9L256 384 64 246.9 64 224z" />
        <path d="M64 246.9L256 384 448 246.9l0-22.9L256 80 64 224l0 22.9zM0 192L256 0 512 192l0 256 0 64-64 0L64 512 0 512l0-64L0 192z" />
    </Icon>
);

export default EnvelopeOpen;