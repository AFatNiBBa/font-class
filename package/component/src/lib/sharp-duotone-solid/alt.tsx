
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=sharp-duotone-solid alt}
 * @preview ![alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/alt.svg)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 384l32 0 160 0 32 0 0 64-32 0-160 0-32 0 0-64z" />
        <path d="M432.6 64L448 64l160 0 32 0 0 64-32 0-144.6 0L217 436l-9.6 12L192 448 32 448 0 448l0-64 32 0 144.6 0L423 76l9.6-12z" />
    </Icon>
);

export default Alt;