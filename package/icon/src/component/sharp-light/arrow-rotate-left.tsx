
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-left?s=sharp-light arrow-rotate-left}
 * @preview ![arrow-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-rotate-left.svg)
 */
const ArrowRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 192l-16 0 0-16L32 48l0-16 32 0 0 16 0 92.6C103.2 75.5 174.5 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-86.4 0-161.4-49-198.8-120.6l28.4-14.8C117.7 406.1 181.9 448 256 448c106 0 192-86 192-192s-86-192-192-192c-71 0-133.1 38.6-166.3 96l86.3 0 16 0 0 32-16 0L48 192z" />
    </Icon>
);

export default ArrowRotateLeft;