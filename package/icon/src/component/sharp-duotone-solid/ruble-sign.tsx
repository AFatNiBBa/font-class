
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=sharp-duotone-solid ruble-sign}
 * @preview ![ruble-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ruble-sign.svg)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64 64 0 0-64L0 352zm128 0l0 64 192 0 0-64-192 0z" />
        <path d="M64 32l32 0 144 0c79.5 0 144 64.5 144 144s-64.5 144-144 144l-112 0 0 160-64 0 0-160L0 320l0-64 64 0L64 64l0-32zm64 224l112 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L128 96l0 160z" />
    </Icon>
);

export default RubleSign;