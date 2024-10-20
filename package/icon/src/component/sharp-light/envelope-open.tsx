
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=sharp-light envelope-open}
 * @preview ![envelope-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/envelope-open.svg)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 223.2l224 154 224-154 0-15.2L256 40 32 208l0 15.2zM480 262L256 416 32 262l0 218 448 0 0-218zM0 192L256 0 512 192l0 48 0 240 0 32-32 0L32 512 0 512l0-32L0 240l0-48z" />
    </Icon>
);

export default EnvelopeOpen;