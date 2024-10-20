
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-light print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 160l-32 0L64 32 64 0 96 0 384 0l64 64 0 96-32 0 0-82.7L370.7 32 96 32l0 128zm384 64L32 224l0 160 32 0 0-32 0-32 32 0 320 0 32 0 0 32 0 32 32 0 0-160zM448 416l0 64 0 32-32 0L96 512l-32 0 0-32 0-64-32 0L0 416l0-32L0 224l0-32 32 0 448 0 32 0 0 32 0 160 0 32-32 0-32 0zM96 352l0 128 320 0 0-128L96 352zm352-96l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default Print;