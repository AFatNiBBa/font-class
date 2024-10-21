
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-duotone-solid caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M256 256L112 96 64 96l0 320 48 0L256 256z" />
    </Icon>
);

export default CaretRight;