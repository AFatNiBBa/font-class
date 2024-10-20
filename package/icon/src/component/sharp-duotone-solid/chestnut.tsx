
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chestnut` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chestnut?s=sharp-duotone-solid chestnut}
 * @preview ![chestnut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chestnut.svg)
 */
const Chestnut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384l448 0 0 32-64 64L64 480 0 416l0-32z" />
        <path d="M448 352c0-134.3-101.7-213.8-168.4-265.8C251 63.8 228.8 46.4 224 32c-4.8 14.4-27 31.8-55.6 54.2C101.7 138.2 0 217.7 0 352v32H448V352z" />
    </Icon>
);

export default Chestnut;