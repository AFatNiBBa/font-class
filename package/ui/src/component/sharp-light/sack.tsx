
import { Icon } from "../../index";

/**
 * A component that renders the `sack` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=sharp-light sack}
 * @preview ![sack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sack.svg)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M393.9 32L351.2 94 333 120.4c7.7 4.9 16.7 11 26.4 18.1C420.8 183.7 512 273.4 512 416l0 64 0 32-32 0L32 512 0 512l0-32 0-64C0 273.4 91.2 183.7 152.6 138.5c9.7-7.1 18.6-13.2 26.4-18.1L160.8 94 118.1 32 96 0l38.9 0L377.1 0 416 0 393.9 32zM480 416c0-147.7-109.4-233.5-164.3-268.6l-5.3-3.4-109 0-5.3 3.4C141.4 182.5 32 268.3 32 416l0 64 448 0 0-64zM299.9 112l6.7-9.8L355.1 32 156.9 32l48.4 70.2 6.7 9.8 87.8 0z" />
    </Icon>
);

export default Sack;