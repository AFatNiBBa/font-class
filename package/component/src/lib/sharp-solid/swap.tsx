
import { Icon } from "../../index";

/**
 * A component that renders the `swap` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=sharp-solid swap}
 * @preview ![swap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/swap.svg)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 120L128 0 240 120l0 40-80 0 0 256 128 0 0-352 0-32 32 0 192 0 32 0 0 32 0 288 80 0 0 40L512 512 400 392l0-40 80 0 0-256L352 96l0 352 0 32-32 0-192 0-32 0 0-32 0-288-80 0 0-40z" />
    </Icon>
);

export default Swap;