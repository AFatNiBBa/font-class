
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=sharp-duotone-solid scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288L0 480l576 0 0-179.6c-8.1-4.1-16.2-8.3-24.3-12.4c-47 0-93.9 0-140.9 0c-137 0-273.9 0-410.8 0zm64 64l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
        <path d="M50 32.2L78.5 46.7 551.7 288l-140.9 0L49.5 103.7 21 89.2 50 32.2zM128 352l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default ScannerImage;