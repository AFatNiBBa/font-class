
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-left?s=light arrow-rotate-left}
 * @preview ![arrow-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-rotate-left.svg)
 */
const ArrowRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 192c-8.8 0-16-7.2-16-16L32 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 92.6C103.2 75.5 174.5 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-79.9 0-150-41.8-189.7-104.8C59.8 364.8 67.7 352 80 352c6 0 11.4 3.2 14.7 8.2C128.9 413 188.4 448 256 448c106 0 192-86 192-192s-86-192-192-192c-71.1 0-133.1 38.6-166.3 96l86.3 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 192z" />
    </Icon>
);

export default ArrowRotateLeft;