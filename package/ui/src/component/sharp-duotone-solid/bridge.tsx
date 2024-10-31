
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=sharp-duotone-solid bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 512 0 32 0 0 64-32 0-40 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64L32 96 0 96 0 32z" />
        <path d="M0 160H576V288c-53 0-96 43-96 96v96H384V384c0-53-43-96-96-96s-96 43-96 96v96H96V384c0-53-43-96-96-96V160z" />
    </Icon>
);

export default Bridge;