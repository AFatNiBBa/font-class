
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=sharp-duotone-solid pen-clip}
 * @preview ![pen-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-clip.svg)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M289 95L417 223c31.7-31.7 63.4-63.4 95-95L384 0 289 95z" />
        <path d="M241 47l-17-17L207 47 95 159l-17 17L112 209.9l17-17 95-95 31 31L32 352 0 512l160-32L383 257l33-33 1-1L241 47z" />
    </Icon>
);

export default PenClip;