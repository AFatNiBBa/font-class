
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=solid notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 390.3L153.5 256 64 121.7l0 268.6zM102.5 448l179.1 0L192 313.7 102.5 448zm128-192L320 390.3l0-268.6L230.5 256zM281.5 64L102.5 64 192 198.3 281.5 64zM0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z" />
    </Icon>
);

export default Notdef;