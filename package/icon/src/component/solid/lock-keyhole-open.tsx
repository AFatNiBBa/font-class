
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=solid lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 64c-44.2 0-80 35.8-80 80l0 48 32 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l224 0 0-48C288 64.5 352.5 0 432 0s144 64.5 144 144l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-44.2-35.8-80-80-80zM256 384c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0z" />
    </Icon>
);

export default LockKeyholeOpen;