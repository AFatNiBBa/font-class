
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=duotone ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 17.7 14.3 32 32 32l32 0 0-64-32 0c-17.7 0-32 14.3-32 32zm128-32l0 64 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0z" />
        <path d="M64 64c0-17.7 14.3-32 32-32l144 0c79.5 0 144 64.5 144 144s-64.5 144-144 144l-112 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0L64 64zm64 192l112 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L128 96l0 160z" />
    </Icon>
);

export default RubleSign;