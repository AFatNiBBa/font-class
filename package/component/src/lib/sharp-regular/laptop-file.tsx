
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=sharp-regular laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 48L112 48l0 272 208 0 0 64L32 384 0 352l0-32 64 0L64 48 64 0l48 0L464 0l48 0 0 48 0 48-48 0 0-48zM400 464l192 0 0-208-80 0 0-80-112 0 0 288zM544 128l96 96 0 240 0 48-48 0-192 0-48 0 0-48 0-288 0-48 48 0 144 0z" />
    </Icon>
);

export default LaptopFile;