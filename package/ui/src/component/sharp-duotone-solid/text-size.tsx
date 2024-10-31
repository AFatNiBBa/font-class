
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-size` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=sharp-duotone-solid text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0 64 0 128 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32-96 0 0 320 32 0 32 0 0 64-32 0-128 0-32 0 0-64 32 0 32 0 0-320L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
        <path d="M320 224l32 0 256 0 32 0 0 32 0 32 0 32-64 0 0-32-64 0 0 128 16 0 32 0 0 64-32 0-96 0-32 0 0-64 32 0 16 0 0-128-64 0 0 32-64 0 0-32 0-32 0-32z" />
    </Icon>
);

export default TextSize;