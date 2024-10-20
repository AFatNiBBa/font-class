
import { Icon } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=sharp-solid apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 96l0-16c0-44.2 35.8-80 80-80l16 0 16 0 0 16 0 16c0 44.2-35.8 80-80 80l-16 0-16 0 0-16zM0 288c0-76.3 35.7-160 112-160l112 32 112-32c76.3 0 112 83.7 112 160c0 128-80 224-160 224l-64-16-64 16C80 512 0 416 0 288z" />
    </Icon>
);

export default AppleWhole;