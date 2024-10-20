
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=sharp-solid mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 64C64 64 0 160 0 272S80 448 176 448l48 0 32-96 64 0 32 96 48 0c96 0 176-64 176-176s-64-208-288-208zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Mask;