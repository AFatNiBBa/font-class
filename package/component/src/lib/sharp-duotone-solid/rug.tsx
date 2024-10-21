
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rug?s=sharp-duotone-solid rug}
 * @preview ![rug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rug.svg)
 */
const Rug: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 64l0 24 0 64 0 48 0 32 0 48 0 32 0 48 0 64 0 24 80 0 0-384L80 64zm112 0l0 384 256 0 0-384L192 64zm288 0l0 384 80 0 0-24 0-64 0-48 0-32 0-48 0-32 0-48 0-64 0-24-80 0z" />
        <path d="M24 64L0 64l0 48 24 0 8 0 0 40-8 0L0 152l0 48 24 0 8 0 0 32-8 0L0 232l0 48 24 0 8 0 0 32-8 0L0 312l0 48 24 0 8 0 0 40-8 0L0 400l0 48 24 0 32 0 24 0 0-24 0-64 0-48 0-32 0-48 0-32 0-48 0-64 0-24L56 64 24 64zm592 0l-32 0-24 0 0 24 0 64 0 48 0 32 0 48 0 32 0 48 0 64 0 24 24 0 32 0 24 0 0-48-24 0-8 0 0-40 8 0 24 0 0-48-24 0-8 0 0-32 8 0 24 0 0-48-24 0-8 0 0-32 8 0 24 0 0-48-24 0-8 0 0-40 8 0 24 0 0-48-24 0zM160 64l0 384 32 0 0-384-32 0zm320 0l-32 0 0 384 32 0 0-384z" />
    </Icon>
);

export default Rug;