
import { Icon, generic } from "../../index";

/**
 * A component that renders the `overline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=duotone overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M400 304A176 176 0 1 1 48 304a176 176 0 1 1 352 0zm-288 0a112 112 0 1 0 224 0 112 112 0 1 0 -224 0z" />
        <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default Overline;