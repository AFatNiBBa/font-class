
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=thin barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 40zm256 0c0-4.4 3.6-8 8-8s8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432zm136-8c4.4 0 8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432c0-4.4 3.6-8 8-8zm-88 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432zM56 32c4.4 0 8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8L48 40c0-4.4 3.6-8 8-8zm392 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432zm56-8c4.4 0 8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432c0-4.4 3.6-8 8-8zM112 40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432zm80-8c4.4 0 8 3.6 8 8l0 432c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-432c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default Barcode;