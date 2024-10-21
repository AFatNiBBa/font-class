
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=sharp-solid lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 64c-44.2 0-80 35.8-80 80l0 48 96 0 0 320L0 512 0 192l288 0 0-48C288 64.5 352.5 0 432 0s144 64.5 144 144l0 48 0 32-64 0 0-32 0-48c0-44.2-35.8-80-80-80zM256 384l32 0 0-64-32 0-64 0-32 0 0 64 32 0 64 0z" />
    </Icon>
);

export default LockKeyholeOpen;