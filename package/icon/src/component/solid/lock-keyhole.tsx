
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=solid lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64c44.2 0 80 35.8 80 80l0 48-160 0 0-48c0-44.2 35.8-80 80-80zM80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-16 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144zM256 320l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default LockKeyhole;