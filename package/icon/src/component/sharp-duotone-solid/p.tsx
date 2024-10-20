
import { Icon, generic } from "../../index";

/**
 * A component that renders the `p` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=sharp-duotone-solid p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 288l96 0c53 0 96-43 96-96s-43-96-96-96L64 96l0 192zM0 352l0-32 0-32L0 96 0 64 0 32l32 0 32 0 96 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-96 0 0 96 0 32L0 480l0-32 0-96z" />
    </Icon>
);

export default P;