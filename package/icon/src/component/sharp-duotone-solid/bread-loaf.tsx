
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=sharp-duotone-solid bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 35.3 28.7 64 64 64l0 224c117.4 0 234.7 0 352 0l0-224c35.3 0 64-28.7 64-64C480 64 304 32 240 32S0 64 0 192z" />
        <path d="M640 192C640 64 464 32 400 32L240 32c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 224 160 0 0-224c35.3 0 64-28.7 64-64z" />
    </Icon>
);

export default BreadLoaf;