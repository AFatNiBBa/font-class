
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=sharp-solid notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM64 390.3L153.5 256 64 121.7l0 268.6zM102.5 448l179.1 0L192 313.7 102.5 448zm128-192L320 390.3l0-268.6L230.5 256zM281.5 64L102.5 64 192 198.3 281.5 64z" />
    </Icon>
);

export default Notdef;