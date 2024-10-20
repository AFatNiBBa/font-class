
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-duotone-solid sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 352L224 64l0 288L48 352zM256 0L528 352l-272 0L256 0z" />
        <path d="M0 384H576L480 512H96L0 384z" />
    </Icon>
);

export default Sailboat;