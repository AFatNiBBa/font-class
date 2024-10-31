
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=light bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 96l0 32 128 0 0-32c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 64l-80 0c-8.8 0-16 7.2-16 16l0 240c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-240c0-8.8-7.2-16-16-16l-80 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-128 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80zm0-32l0-32c0-53 43-96 96-96s96 43 96 96l0 32 80 0c26.5 0 48 21.5 48 48l0 240c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 176c0-26.5 21.5-48 48-48l80 0z" />
    </Icon>
);

export default BagShopping;