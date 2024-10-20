
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rug?s=duotone rug}
 * @preview ![rug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rug.svg)
 */
const Rug: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 64l0 24 0 88 0 80 0 80 0 88 0 24 80 0 0-384L80 64zm112 0l0 384 256 0 0-384L192 64zm288 0l0 384 80 0 0-24 0-88 0-80 0-80 0-88 0-24-80 0z" />
        <path d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24l8 0 0 40-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 32-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 32-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 40-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 24 0 0-24 0-88 0-80 0-80 0-88 0-24L56 64 24 64zm592 0l-32 0-24 0 0 24 0 88 0 80 0 80 0 88 0 24 24 0 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-40 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-32 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-32 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-40 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zM160 64l0 384 32 0 0-384-32 0zm320 0l-32 0 0 384 32 0 0-384z" />
    </Icon>
);

export default Rug;