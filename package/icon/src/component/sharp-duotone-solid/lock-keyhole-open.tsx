
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=sharp-duotone-solid lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 0 32 64 0 0-32 0-48C576 64.5 511.5 0 432 0S288 64.5 288 144z" />
        <path d="M448 192L0 192 0 512l448 0 0-320zM256 384l-64 0-32 0 0-64 32 0 64 0 32 0 0 64-32 0z" />
    </Icon>
);

export default LockKeyholeOpen;