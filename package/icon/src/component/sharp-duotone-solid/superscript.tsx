
import { Icon, generic } from "../../index";

/**
 * A component that renders the `superscript` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=sharp-duotone-solid superscript}
 * @preview ![superscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/superscript.svg)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l32 0 32 0 16.7 0 9.6 13.6L176 200.2 261.8 77.6 271.3 64 288 64l32 0 32 0 0 64-32 0-15.3 0L215.1 256l89.6 128 15.3 0 32 0 0 64-32 0-32 0-16.7 0-9.6-13.6L176 311.8 90.2 434.4 80.7 448 64 448l-32 0L0 448l0-64 32 0 15.3 0 89.6-128L47.3 128 32 128 0 128 0 64z" />
        <path d="M416 0L384 0l0 64 32 0 0 96-32 0 0 64 32 0 64 0 32 0 0-64-32 0 0-128 0-32L448 0 416 0z" />
    </Icon>
);

export default Superscript;