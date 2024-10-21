
import { Icon } from "../../index";

/**
 * A component that renders the `product-hunt` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/product-hunt?s=brands product-hunt}
 * @preview ![product-hunt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/product-hunt.svg)
 */
const ProductHunt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" />
    </Icon>
);

export default ProductHunt;