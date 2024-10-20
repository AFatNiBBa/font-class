
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-big-small` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-big-small?s=sharp-solid arrow-down-big-small}
 * @preview ![arrow-down-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-big-small.svg)
 */
const ArrowDownBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l224 0 0 224-224 0 0-224zm0 288l160 0 0 160-160 0 0-160zM183.7 469.5l-23.7 26-23.7-26-80-88L34.8 357.8l47.4-43.1 21.5 23.7L128 365.2 128 80l0-32 64 0 0 32 0 285.2 24.3-26.8 21.5-23.7 47.4 43.1-21.5 23.7-80 88z" />
    </Icon>
);

export default ArrowDownBigSmall;