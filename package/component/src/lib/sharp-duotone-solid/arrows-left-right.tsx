
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=sharp-duotone-solid arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256.1 223.9c0 21.3 0 42.7 0 64l130.6 0-41.4 41.4-22.6 22.6 45.3 45.3 22.6-22.6 96-96 22.6-22.6-22.6-22.6-96-96-22.6-22.6-45.3 45.3 22.6 22.6 41.4 41.4-130.6 0z" />
        <path d="M25.4 233.3L2.8 255.9l22.6 22.6 96 96 22.6 22.6 45.3-45.3-22.6-22.6-41.4-41.4 130.7 0 0-64-130.7 0 41.4-41.4 22.6-22.6-45.3-45.3-22.6 22.6-96 96z" />
    </Icon>
);

export default ArrowsLeftRight;