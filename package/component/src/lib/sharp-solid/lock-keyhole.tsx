
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=sharp-solid lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64c44.2 0 80 35.8 80 80l0 48-160 0 0-48c0-44.2 35.8-80 80-80zM80 144l0 48L0 192 0 512l448 0 0-320-80 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144zM256 320l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32z" />
    </Icon>
);

export default LockKeyhole;