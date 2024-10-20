
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=thin lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 128c0-61.9 50.1-112 112-112s112 50.1 112 112l0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-48 0 0-64zm-16 80l16 0 48 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48l256 0z" />
    </Icon>
);

export default LockOpen;