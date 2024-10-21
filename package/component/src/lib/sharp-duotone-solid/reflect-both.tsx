
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-duotone-solid reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416l32 0L192 256 32 96 0 96zM320 256L480 416l32 0 0-320-32 0L320 256z" />
        <path d="M256 192L96 32 96 0 416 0l0 32L256 192zm0 128L416 480l0 32L96 512l0-32L256 320z" />
    </Icon>
);

export default ReflectBoth;