
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping-minus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-minus?s=regular bag-shopping-minus}
 * @preview ![bag-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bag-shopping-minus.svg)
 */
const BagShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c35.3 0 64 28.7 64 64l0 48-128 0 0-48c0-35.3 28.7-64 64-64zM112 112l0 48-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112zM48 208l352 0 0 208c0 26.5-21.5 48-48 48L96 464c-26.5 0-48-21.5-48-48l0-208zm96 104c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0z" />
    </Icon>
);

export default BagShoppingMinus;