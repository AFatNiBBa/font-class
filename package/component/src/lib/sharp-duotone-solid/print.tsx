
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-duotone-solid print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 192 384 0 0-128L384 0 64 0zM96 352l0 32 0 128 320 0 0-128 0-32L96 352z" />
        <path d="M0 192l512 0 0 192-96 0 0-32L96 352l0 32L0 384 0 192zm408 56l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default Print;