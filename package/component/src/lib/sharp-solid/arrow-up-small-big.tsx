
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-small-big` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-small-big?s=sharp-solid arrow-up-small-big}
 * @preview ![arrow-up-small-big](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-small-big.svg)
 */
const ArrowUpSmallBig: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l0 160 160 0 0-160L320 32zm0 224l0 224 224 0 0-224-224 0zM183.7 58.5L160 32.4l-23.7 26-80 88L34.8 170.2l47.4 43.1 21.5-23.7L128 162.8 128 448l0 32 64 0 0-32 0-285.2 24.3 26.8 21.5 23.7 47.4-43.1-21.5-23.7-80-88z" />
    </Icon>
);

export default ArrowUpSmallBig;