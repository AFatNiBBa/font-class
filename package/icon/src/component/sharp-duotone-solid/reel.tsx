
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reel?s=sharp-duotone-solid reel}
 * @preview ![reel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/reel.svg)
 */
const Reel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 48 320 0 0-48L64 64zm0 80l0 32 320 0 0-32L64 144zm0 64l0 32 368 0 16 0 0-32-16 0L64 208zm0 64l0 32 320 0 0-32L64 272zm0 64l0 32 320 0 0-32L64 336zm0 64l0 48 320 0 0-48L64 400z" />
        <path d="M0 0L32 0 416 0l32 0 0 64-32 0L32 64 0 64 0 0zM0 448l32 0 384 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
    </Icon>
);

export default Reel;