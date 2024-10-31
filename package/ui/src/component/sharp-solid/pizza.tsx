
import { Icon } from "../../index";

/**
 * A component that renders the `pizza` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=sharp-solid pizza}
 * @preview ![pizza](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pizza.svg)
 */
const Pizza: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 464c57.4 0 109.4-23.3 147.1-60.9L437 437c-46.3 46.3-110.3 75-181 75C114.6 512 0 397.4 0 256S114.6 0 256 0c70.7 0 134.7 28.7 181 75l-33.9 33.9C365.4 71.3 313.4 48 256 48C141.1 48 48 141.1 48 256s93.1 208 208 208zm124.5-83.5c-68.7 68.7-180.2 68.7-248.9 0s-68.7-180.2 0-248.9s180.2-68.7 248.9 0L256 256 380.5 380.5zM192 264a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm24-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 184a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm190.6 14.6C509.4 354.3 528 307.3 528 256s-18.6-98.3-49.4-134.6l34-34c39.5 45 63.4 104 63.4 168.6s-23.9 123.6-63.4 168.6l-34-34zM344 256l35.5-35.5c3.6 2.2 7.9 3.5 12.5 3.5c13.3 0 24-10.7 24-24c0-4.6-1.3-8.9-3.5-12.5l43.4-43.4c53.5 64.8 53.5 158.9 0 223.8L344 256zm104 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Pizza;