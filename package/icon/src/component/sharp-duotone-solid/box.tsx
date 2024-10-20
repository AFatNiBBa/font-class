
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=sharp-duotone-solid box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L64 32 0 160zM240 32l0 128 208 0L384 32 240 32z" />
        <path d="M240 160l208 0 0 320L0 480 0 160l208 0 0-128 32 0 0 128z" />
    </Icon>
);

export default Box;