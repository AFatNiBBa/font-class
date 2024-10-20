
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-haze` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-haze?s=sharp-duotone-solid sun-haze}
 * @preview ![sun-haze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sun-haze.svg)
 */
const SunHaze: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 150l73.1 106c18.3 0 36.6 0 54.9 0c0-70.7 57.3-128 128-128s128 57.3 128 128c18.3 0 36.6 0 54.9 0c24.4-35.4 48.7-70.7 73.1-106L449.3 126.7 426 0 320 73.1 214 0 190.7 126.7 64 150zM224 256c64 0 128 0 192 0c0-53-43-96-96-96s-96 43-96 96z" />
        <path d="M640 288l-24 0-112 0-24 0 0 48 24 0 112 0 24 0 0-48zm-208 0l-24 0L88 288l-24 0 0 48 24 0 320 0 24 0 0-48zm144 88l-24 0L24 376 0 376l0 48 24 0 528 0 24 0 0-48zM88 464l-24 0 0 48 24 0 112 0 24 0 0-48-24 0L88 464zm208 0l-24 0 0 48 24 0 320 0 24 0 0-48-24 0-320 0z" />
    </Icon>
);

export default SunHaze;