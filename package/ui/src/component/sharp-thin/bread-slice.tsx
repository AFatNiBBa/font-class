
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-thin bread-slice}
 * @preview ![bread-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bread-slice.svg)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 240l0 16 0 208 352 0 0-208 0-16 16 0c26.5 0 48-21.5 48-48c0-54.2-40.2-90.1-94.3-113.3C348.1 55.7 286.3 48 256 48s-92.1 7.7-145.7 30.7C56.2 101.9 16 137.8 16 192c0 26.5 21.5 48 48 48l16 0zM448 464l0 16-16 0L80 480l-16 0 0-16 0-192 0-16c-35.3 0-64-28.7-64-64C0 64 192 32 256 32s256 32 256 160c0 35.3-28.7 64-64 64l0 16 0 192z" />
    </Icon>
);

export default BreadSlice;