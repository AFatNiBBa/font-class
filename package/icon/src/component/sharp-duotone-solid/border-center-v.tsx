
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-center-v` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-center-v?s=sharp-duotone-solid border-center-v}
 * @preview ![border-center-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-center-v.svg)
 */
const BorderCenterV: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l64 0 0-64L0 32zm0 96l0 64 64 0 0-64L0 128zm0 96l0 64 64 0 0-64L0 224zm0 96l0 64 64 0 0-64L0 320zm0 96l0 64 64 0 0-64L0 416zM96 32l0 64 64 0 0-64L96 32zm0 192l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zM288 32l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0zM384 32l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0z" />
        <path d="M192 480l0-32 0-384 0-32 64 0 0 32 0 384 0 32-64 0z" />
    </Icon>
);

export default BorderCenterV;