
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-eye` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-eye?s=sharp-duotone-solid arrows-to-eye}
 * @preview ![arrows-to-eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-to-eye.svg)
 */
const ArrowsToEye: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 33.9L78.1 112 40 112l-24 0 0 48 24 0 96 0 24 0 0-24 0-96 0-24-48 0 0 24 0 38.1L33.9 0 0 33.9zM0 478.1L33.9 512 112 433.9l0 38.1 0 24 48 0 0-24 0-96 0-24-24 0-96 0-24 0 0 48 24 0 38.1 0L0 478.1zM480 16l0 24 0 96 0 24 24 0 96 0 24 0 0-48-24 0-38.1 0L640 33.9 606.1 0 528 78.1 528 40l0-24-48 0zm0 336l0 24 0 96 0 24 48 0 0-24 0-38.1L606.1 512 640 478.1 561.9 400l38.1 0 24 0 0-48-24 0-96 0-24 0z" />
        <path d="M128 256c20-48 86.4-144 192-144s172 96 192 144c-20 48-86.4 144-192 144s-172-96-192-144zm192 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ArrowsToEye;