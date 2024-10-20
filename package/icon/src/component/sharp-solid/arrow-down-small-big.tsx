
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-small-big` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-small-big?s=sharp-solid arrow-down-small-big}
 * @preview ![arrow-down-small-big](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-small-big.svg)
 */
const ArrowDownSmallBig: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l160 0 0 160-160 0 0-160zm0 224l224 0 0 224-224 0 0-224zM183.7 453.5l-23.7 26-23.7-26-80-88L34.8 341.8l47.4-43 21.5 23.7L128 349.2 128 80l0-32 64 0 0 32 0 269.2 24.3-26.8 21.5-23.7 47.4 43-21.5 23.7-80 88z" />
    </Icon>
);

export default ArrowDownSmallBig;