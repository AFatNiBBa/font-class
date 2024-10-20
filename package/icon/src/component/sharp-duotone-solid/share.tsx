
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=sharp-duotone-solid share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304C0 432 128 480 128 480s-32-32-32-80c0-61.9 50.1-112 112-112l80 0 0-160-112 0C78.8 128 0 206.8 0 304z" />
        <path d="M320 384L512 208 320 32l-32 0 0 352 32 0z" />
    </Icon>
);

export default Share;