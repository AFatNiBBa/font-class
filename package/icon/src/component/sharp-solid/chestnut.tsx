
import { Icon } from "../../index";

/**
 * A component that renders the `chestnut` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chestnut?s=sharp-solid chestnut}
 * @preview ![chestnut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chestnut.svg)
 */
const Chestnut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 416l64 64 320 0 64-64 0-32L0 384l0 32zm448-64c0-134.3-101.7-213.8-168.4-265.8C251 63.8 228.8 46.4 224 32c-4.8 14.4-27 31.8-55.6 54.2C101.7 138.2 0 217.7 0 352l448 0z" />
    </Icon>
);

export default Chestnut;