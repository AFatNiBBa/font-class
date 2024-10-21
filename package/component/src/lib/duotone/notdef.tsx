
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notdef` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=duotone notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 64l38.5 0L192 198.3 281.5 64 320 64l0 57.7L230.5 256 320 390.3l0 57.7-38.5 0L192 313.7 102.5 448 64 448l0-57.7L153.5 256 64 121.7c0-19.2 0-38.5 0-57.7z" />
        <path d="M64 64l0 384 256 0 0-384L64 64zM0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z" />
    </Icon>
);

export default Notdef;