
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inhaler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=sharp-duotone-solid inhaler}
 * @preview ![inhaler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/inhaler.svg)
 */
const Inhaler: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 352zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 448zM96 304a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM385.7 145.7c44.4 44.4 88.8 88.8 133.2 133.2L576 72 416 32 385.7 145.7z" />
        <path d="M536.6 296.6L364.2 124.2 337.3 224 192 224l0 256 294.6 0 50-183.4z" />
    </Icon>
);

export default Inhaler;