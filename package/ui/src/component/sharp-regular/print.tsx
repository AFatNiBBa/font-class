
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-regular print}
 * @preview ![print](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/print.svg)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 160l0-112 252.1 0L400 83.9l0 76.1 48 0 0-96L384 0 112 0 64 0l0 48 0 112 48 0zM384 368l0 96-256 0 0-96 256 0zM128 320l-48 0 0 32-32 0 0-112 416 0 0 112-32 0 0-32-48 0-256 0zm304 80l32 0 48 0 0-48 0-112 0-48-48 0L48 192 0 192l0 48L0 352l0 48 48 0 32 0 0 64 0 48 48 0 256 0 48 0 0-48 0-64z" />
    </Icon>
);

export default Print;