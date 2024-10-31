
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-light bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 224l0 32 0 192 320 0 0-192 0-32 32 0c17.7 0 32-14.3 32-32c0-44.3-32.4-76.2-84.6-98.6C344.1 71.4 284.5 64 256 64s-88.1 7.4-139.4 29.4C64.4 115.8 32 147.7 32 192c0 17.7 14.3 32 32 32l32 0zM448 448l0 32-32 0L96 480l-32 0 0-32 0-160 0-32c-35.3 0-64-28.7-64-64C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 32 0 160z" />
    </Icon>
);

export default BreadSlice;