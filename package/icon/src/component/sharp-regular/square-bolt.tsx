
import { Icon } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=sharp-regular square-bolt}
 * @preview ![square-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-bolt.svg)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM200 272l-88 0 0-24L288 112 248 240l88 0 0 24L160 400l40-128z" />
    </Icon>
);

export default SquareBolt;