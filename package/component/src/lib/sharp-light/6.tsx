
import { Icon } from "../../index";

/**
 * A component that renders the `6` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=sharp-light 6}
 * @preview ![6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/6.svg)
 */
const $6: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M200.8 32L41.2 211.5C16 239.9 1.5 276.2 .1 314.1C0 316.1 0 318 0 320c0 88.4 71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160c-11.4 0-22.5 1.2-33.2 3.5L243.6 32l-42.8 0zM160 448C89.3 448 32 390.7 32 320c0-1 0-2 0-3.1C33.7 247.7 90.3 192 160 192c70.7 0 128 57.3 128 128s-57.3 128-128 128z" />
    </Icon>
);

export default $6;