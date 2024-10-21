
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mitten` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=sharp-duotone-solid mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l32 0 288 0 32 0 0 128L32 512l0-128z" />
        <path d="M316.8 243.2L283.2 108.9C267.2 44.9 209.7 0 143.8 0l-3.4 0C62.8 0 0 62.8 0 140.3c0 13 1.8 26 5.4 38.6L64 384l288 0 96-112-80-80-51.2 51.2z" />
    </Icon>
);

export default Mitten;