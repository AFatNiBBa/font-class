
import { Icon } from "../../index";

/**
 * A component that renders the `openid` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/openid?s=brands openid}
 * @preview ![openid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/openid.svg)
 */
const Openid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z" />
    </Icon>
);

export default Openid;