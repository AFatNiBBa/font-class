
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=sharp-regular helmet-safety}
 * @preview ![helmet-safety](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/helmet-safety.svg)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 32l0 24 0 240 0 24 48 0 0-24 0-216 64 0 0 216 0 24 48 0 0-24 0-240 0-24-24 0L232 32l-24 0zM0 384l0 24s80 72 288 72s288-72 288-72l0-24L0 384zm32-96l0 64 48 0 0-64c0-68.4 39-127.7 96-156.8l0-52.5C91.8 110.9 32 192.5 32 288zm464-2.2l0 66.2 48 0 0-64 0-2.4c-1-94.5-60.5-174.9-144-206.9l0 52.5c56.4 28.8 95.2 87.2 96 154.6z" />
    </Icon>
);

export default HelmetSafety;