
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-regular bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 208l0 48 0 176 288 0 0-176 0-48 48 0c8.8 0 16-7.2 16-16c0-34.5-24.6-62.3-74.9-83.9C340.2 87.2 282.8 80 256 80s-84.2 7.2-133.1 28.1C72.6 129.7 48 157.5 48 192c0 8.8 7.2 16 16 16l48 0zM448 432l0 48-48 0-288 0-48 0 0-48 0-128 0-48c-35.3 0-64-28.7-64-64C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 48 0 128z" />
    </Icon>
);

export default BreadSlice;