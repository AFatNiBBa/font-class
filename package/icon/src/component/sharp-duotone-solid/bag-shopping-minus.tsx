
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-minus?s=sharp-duotone-solid bag-shopping-minus}
 * @preview ![bag-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bag-shopping-minus.svg)
 */
const BagShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l112 0 48 0 128 0 48 0 112 0 0 352L0 512 0 160zM120 312l0 48 24 0 160 0 24 0 0-48-24 0-160 0-24 0z" />
        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48 48 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48 48 0 0-48zM144 312l-24 0 0 48 24 0 160 0 24 0 0-48-24 0-160 0z" />
    </Icon>
);

export default BagShoppingMinus;