
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-minus?s=sharp-solid bag-shopping-minus}
 * @preview ![bag-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bag-shopping-minus.svg)
 */
const BagShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 112l0 48 128 0 0-48c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-48 48l0-48C112 50.1 162.1 0 224 0s112 50.1 112 112l0 48 112 0 0 352L0 512 0 160l112 0zm8 152l0 48 24 0 160 0 24 0 0-48-24 0-160 0-24 0z" />
    </Icon>
);

export default BagShoppingMinus;