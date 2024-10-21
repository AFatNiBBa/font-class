
import { Icon, generic } from "../../index";

/**
 * A component that renders the `overline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=sharp-duotone-solid overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M400 304A176 176 0 1 1 48 304a176 176 0 1 1 352 0zm-288 0a112 112 0 1 0 224 0 112 112 0 1 0 -224 0z" />
        <path d="M0 32l32 0 384 0 32 0 0 64-32 0L32 96 0 96 0 32z" />
    </Icon>
);

export default Overline;