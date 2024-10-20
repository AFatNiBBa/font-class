
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=light lock-open}
 * @preview ![lock-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lock-open.svg)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 128c0-53 43-96 96-96s96 43 96 96l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L80 192c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-16 0 0-64zm-16 96l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48l256 0z" />
    </Icon>
);

export default LockOpen;