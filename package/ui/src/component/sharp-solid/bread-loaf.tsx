
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=sharp-solid bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M397.4 34.9c-2.1-.9-4.1-1.9-6.2-2.8c3.1-.1 6-.2 8.8-.2c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 224-128 0 0-197.5c37.3-13.2 64-48.7 64-90.5c0-82.2-57.6-130.7-114.6-157.1zM0 192C0 64 176 32 240 32s240 32 240 160c0 35.3-28.7 64-64 64l0 224L64 480l0-224c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default BreadLoaf;