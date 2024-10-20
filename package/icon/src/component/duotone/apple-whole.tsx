
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=duotone apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M208 80l0 16c0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80l0-16c0-8.8-7.2-16-16-16L288 0c-44.2 0-80 35.8-80 80z" />
        <path d="M112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512c16.5 0 38.1-6.6 51.5-11.3c8.1-2.8 16.9-2.8 25 0c13.4 4.7 35 11.3 51.5 11.3c80 0 160-96 160-224c0-76.3-35.7-160-112-160c-27.3 0-59.7 10.3-82.7 19.3c-18.8 7.3-39.9 7.3-58.7 0C171.7 138.3 139.3 128 112 128z" />
    </Icon>
);

export default AppleWhole;