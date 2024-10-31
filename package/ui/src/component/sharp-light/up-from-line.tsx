
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-line?s=sharp-light up-from-line}
 * @preview ![up-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up-from-line.svg)
 */
const UpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 240l0-32 32 0 48 0 0-17.7L192 75.1 64 190.3 64 208l48 0 32 0 0 32 0 112 96 0 0-112zm112 0l-32 0-16 0-32 0 0 32 0 80 0 32-32 0-96 0-32 0 0-32 0-80 0-32-32 0-16 0-32 0 0-32 0-32L192 32 352 176l0 32 0 32zM16 480L0 480l0-32 16 0 352 0 16 0 0 32-16 0L16 480z" />
    </Icon>
);

export default UpFromLine;