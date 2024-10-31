
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=duotone bridge}
 * @preview ![bridge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bridge.svg)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-40 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64L32 96C14.3 96 0 81.7 0 64z" />
        <path d="M0 160H576V288c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V384c0-53-43-96-96-96s-96 43-96 96v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384c0-53-43-96-96-96V160z" />
    </Icon>
);

export default Bridge;