
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=sharp-regular lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 48c-44.2 0-80 35.8-80 80l0 64 48 0 48 0 0 48 0 224 0 48-48 0L48 512 0 512l0-48L0 240l0-48 48 0 256 0 0-64C304 57.3 361.3 0 432 0s128 57.3 128 128l0 72 0 24-48 0 0-24 0-72c0-44.2-35.8-80-80-80zM400 240L48 240l0 224 352 0 0-224zM256 376l-64 0-24 0 0-48 24 0 64 0 24 0 0 48-24 0z" />
    </Icon>
);

export default LockKeyholeOpen;