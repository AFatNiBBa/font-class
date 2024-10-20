
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-eye` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-eye?s=sharp-solid arrows-to-eye}
 * @preview ![arrows-to-eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-to-eye.svg)
 */
const ArrowsToEye: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40 112l38.1 0L0 33.9 33.9 0 112 78.1 112 40l0-24 48 0 0 24 0 96 0 24-24 0-96 0-24 0 0-48 24 0zm521.9 0l38.1 0 24 0 0 48-24 0-96 0-24 0 0-24 0-96 0-24 48 0 0 24 0 38.1L606.1 0 640 33.9 561.9 112zM128 256c20-48 86.4-144 192-144s172 96 192 144c-20 48-86.4 144-192 144s-172-96-192-144zm192 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM528 433.9l0 38.1 0 24-48 0 0-24 0-96 0-24 24 0 96 0 24 0 0 48-24 0-38.1 0L640 478.1 606.1 512 528 433.9zM112 472l0-38.1L33.9 512 0 478.1 78.1 400 40 400l-24 0 0-48 24 0 96 0 24 0 0 24 0 96 0 24-48 0 0-24z" />
    </Icon>
);

export default ArrowsToEye;