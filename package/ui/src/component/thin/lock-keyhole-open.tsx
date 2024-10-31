
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=thin lock-keyhole-open}
 * @preview ![lock-keyhole-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lock-keyhole-open.svg)
 */
const LockKeyholeOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 16c-61.9 0-112 50.1-112 112l0 64 48 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l256 0 0-64C320 57.3 377.3 0 448 0s128 57.3 128 128l0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88c0-61.9-50.1-112-112-112zM64 208c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-48 0-16 0L64 208zM256 368c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm0-48c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0z" />
    </Icon>
);

export default LockKeyholeOpen;