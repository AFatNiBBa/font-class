
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=sharp-solid helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 32L224 32l0 34.3L224 176 159.6 85.8C84.1 121.8 32 198.8 32 288l0 64 512 0 0-66.4c-.9-88.1-52.8-164.1-127.5-199.8L352 176l0-109.7L352 32zM0 408s80 72 288 72s288-72 288-72l0-24L0 384l0 24z" />
    </Icon>
);

export default HelmetSafety;