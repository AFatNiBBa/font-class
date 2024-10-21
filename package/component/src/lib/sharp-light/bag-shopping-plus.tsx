
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-plus?s=sharp-light bag-shopping-plus}
 * @preview ![bag-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bag-shopping-plus.svg)
 */
const BagShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 96l0 32 128 0 0-32c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 32l0-32c0-53 43-96 96-96l16 0 0 1.3c45.4 7.6 80 47.1 80 94.7l0 32 96 0 32 0 0 32 0 320 0 32-32 0L32 512 0 512l0-32L0 160l0-32 32 0 96 0zm0 32l-96 0 0 320 384 0 0-320-96 0-32 0-128 0-32 0zm0 144l16 0 64 0 0-64 0-16 32 0 0 16 0 64 64 0 16 0 0 32-16 0-64 0 0 64 0 16-32 0 0-16 0-64-64 0-16 0 0-32z" />
    </Icon>
);

export default BagShoppingPlus;