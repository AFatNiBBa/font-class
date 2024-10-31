
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=sharp-duotone-solid arrows-maximize}
 * @preview ![arrows-maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-maximize.svg)
 */
const ArrowsMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l0 32 0 128 0 32 64 0 0-32 0-50.7L210.7 256 256 210.7 141.3 96 192 96l32 0 0-64-32 0L64 32 32 32zM256 301.3L370.7 416 320 416l-32 0 0 64 32 0 128 0 32 0 0-32 0-128 0-32-64 0 0 32 0 50.7L301.3 256 256 301.3z" />
        <path d="M288 32l32 0 128 0 32 0 0 32 0 128 0 32-64 0 0-32 0-50.7L141.3 416l50.7 0 32 0 0 64-32 0L64 480l-32 0 0-32 0-128 0-32 64 0 0 32 0 50.7L370.7 96 320 96l-32 0 0-64z" />
    </Icon>
);

export default ArrowsMaximize;