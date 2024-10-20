
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt-tank-top` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt-tank-top?s=sharp-duotone-solid shirt-tank-top}
 * @preview ![shirt-tank-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shirt-tank-top.svg)
 */
const ShirtTankTop: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M112 32l0-32L48 0l0 32 0 32 0 16 0 48L0 256 0 512l384 0 0-256L336 128l0-48 0-16 0-32 0-32L272 0l0 32 0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-48z" />
    </Icon>
);

export default ShirtTankTop;