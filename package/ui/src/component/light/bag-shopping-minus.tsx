
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-minus?s=light bag-shopping-minus}
 * @preview ![bag-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bag-shopping-minus.svg)
 */
const BagShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c35.3 0 64 28.7 64 64l0 32-128 0 0-32c0-35.3 28.7-64 64-64zM128 96l0 32-80 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-240c0-26.5-21.5-48-48-48l-80 0 0-32c0-53-43-96-96-96s-96 43-96 96zM48 160l96 0 160 0 96 0c8.8 0 16 7.2 16 16l0 240c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-240c0-8.8 7.2-16 16-16zm96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default BagShoppingMinus;