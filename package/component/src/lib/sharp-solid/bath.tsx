
import { Icon } from "../../index";

/**
 * A component that renders the `bath` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bath?s=sharp-solid bath}
 * @preview ![bath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bath.svg)
 */
const Bath: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0L32 0l0 32 0 224L0 256l0 64 32 0 448 0 32 0 0-64-32 0L96 256 96 64l18.7 0 18.8 18.8C130 91.8 128 101.7 128 112c0 19.6 7 37.5 18.7 51.4L134.1 176 168 209.9l17-17L289 89l17-17L272 38.1 259.4 50.7C245.5 39 227.6 32 208 32c-10.3 0-20.2 2-29.2 5.5L150.6 9.4 141.3 0 128 0 64 0zM32 352l0 16c0 28.4 12.4 54 32 71.6L64 480l0 32 64 0 0-32 0-16 256 0 0 16 0 32 64 0 0-32 0-40.4c19.6-17.6 32-43.1 32-71.6l0-16L32 352z" />
    </Icon>
);

export default Bath;