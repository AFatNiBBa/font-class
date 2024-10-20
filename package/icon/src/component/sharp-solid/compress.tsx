
import { Icon } from "../../index";

/**
 * A component that renders the `compress` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress?s=sharp-solid compress}
 * @preview ![compress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/compress.svg)
 */
const Compress: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 64l0-32L96 32l0 32 0 64-64 0L0 128l0 64 32 0 96 0 32 0 0-32 0-96zM32 320L0 320l0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM352 64l0-32-64 0 0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 320l-32 0 0 32 0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0-96 0z" />
    </Icon>
);

export default Compress;