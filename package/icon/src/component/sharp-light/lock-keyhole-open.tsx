
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=sharp-light lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 32c-53 0-96 43-96 96l0 64 64 0 32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32L0 224l0-32 32 0 288 0 0-64C320 57.3 377.3 0 448 0s128 57.3 128 128l0 80 0 16-32 0 0-16 0-80c0-53-43-96-96-96zM32 224l0 256 384 0 0-256-80 0L32 224zM264 368l-80 0-16 0 0-32 16 0 80 0 16 0 0 32-16 0z" />
    </Icon>
);

export default LockKeyholeOpen;