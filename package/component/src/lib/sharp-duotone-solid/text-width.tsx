
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-width` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=sharp-duotone-solid text-width}
 * @preview ![text-width](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/text-width.svg)
 */
const TextWidth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 192 0 192 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32L256 96l0 128 32 0 0 64-32 0-64 0-32 0 0-64 32 0 0-128L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
        <path d="M96 480L0 384l96-96 32 0 0 64 192 0 0-64 32 0 96 96-96 96-32 0 0-64-192 0 0 64-32 0z" />
    </Icon>
);

export default TextWidth;