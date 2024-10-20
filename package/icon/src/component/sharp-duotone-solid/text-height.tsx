
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-height` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=sharp-duotone-solid text-height}
 * @preview ![text-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/text-height.svg)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 96 0 64 0 96 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32-64 0 0 320 32 0 32 0 0 64-32 0L96 480l-32 0 0-64 32 0 32 0 0-320L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
        <path d="M384 128l96-96 96 96 0 32-64 0 0 192 64 0 0 32-96 96-96-96 0-32 64 0 0-192-64 0 0-32z" />
    </Icon>
);

export default TextHeight;