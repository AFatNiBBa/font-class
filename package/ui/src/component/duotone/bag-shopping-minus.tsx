
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-minus?s=duotone bag-shopping-minus}
 * @preview ![bag-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bag-shopping-minus.svg)
 */
const BagShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 208L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0-48 0-128 0-48 0-64 0c-26.5 0-48 21.5-48 48zM120 336c0-13.3 10.7-24 24-24l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24z" />
        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48 48 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48 48 0 0-48zM144 312c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0z" />
    </Icon>
);

export default BagShoppingMinus;