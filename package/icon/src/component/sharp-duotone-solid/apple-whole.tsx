
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=sharp-duotone-solid apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M208 80l0 16 0 16 16 0 16 0c44.2 0 80-35.8 80-80l0-16 0-16L304 0 288 0c-44.2 0-80 35.8-80 80z" />
        <path d="M112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512l64-16 64 16c80 0 160-96 160-224c0-76.3-35.7-160-112-160L224 160 112 128z" />
    </Icon>
);

export default AppleWhole;