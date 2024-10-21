
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=sharp-duotone-solid arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 288c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64l0 64c88.4 0 160 71.6 160 160s-71.6 160-160 160s-160-71.6-160-160l-64 0z" />
        <path d="M0 0L32 0 192 0l32 0 0 64-32 0-82.7 0L342.6 297.4 365.3 320 320 365.3l-22.6-22.6L64 109.3 64 192l0 32L0 224l0-32L0 32 0 0z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;