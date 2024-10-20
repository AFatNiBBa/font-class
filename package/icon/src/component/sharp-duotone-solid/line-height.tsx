
import { Icon, generic } from "../../index";

/**
 * A component that renders the `line-height` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-height?s=sharp-duotone-solid line-height}
 * @preview ![line-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/line-height.svg)
 */
const LineHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 64l320 0 0 64-320 0 0-64zm0 160l320 0 0 64-320 0 0-64zm0 160l320 0 0 64-320 0 0-64z" />
        <path d="M96 32l96 96-64 0 0 256 64 0L96 480 0 384l64 0 0-256L0 128 96 32z" />
    </Icon>
);

export default LineHeight;