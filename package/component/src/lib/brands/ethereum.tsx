
import { Icon } from "../../index";

/**
 * A component that renders the `ethereum` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethereum?s=brands ethereum}
 * @preview ![ethereum](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/ethereum.svg)
 */
const Ethereum: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
    </Icon>
);

export default Ethereum;