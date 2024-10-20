
import { Icon } from "../../index";

/**
 * A component that renders the `loveseat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=sharp-solid loveseat}
 * @preview ![loveseat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/loveseat.svg)
 */
const Loveseat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 160 32 0 32 0 0 32 0 96 256 0 0-96 0-32 32 0 32 0 0-160L64 32zm0 192L0 224 0 480l96 0 0-32 320 0 0 32 96 0 0-256-64 0-32 0 0 32 0 64 0 32-32 0-256 0-32 0 0-32 0-64 0-32-32 0z" />
    </Icon>
);

export default Loveseat;