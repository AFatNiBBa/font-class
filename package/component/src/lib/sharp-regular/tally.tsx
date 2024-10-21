
import { Icon } from "../../index";

/**
 * A component that renders the `tally` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally?s=sharp-regular tally}
 * @preview ![tally](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tally.svg)
 */
const Tally: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M152 40l0 24 0 222.7L232 260l0-196 0-24 48 0 0 24 0 180 80-26.7L360 64l0-24 48 0 0 24 0 137.4 80-26.7L488 64l0-24 48 0 0 24 0 94.7 64.4-21.5 22.8-7.6 15.2 45.5-22.8 7.6L536 209.3 536 448l0 24-48 0 0-24 0-222.7L408 252l0 196 0 24-48 0 0-24 0-180-80 26.7L280 448l0 24-48 0 0-24 0-137.4-80 26.7L152 448l0 24-48 0 0-24 0-94.7L39.6 374.8l-22.8 7.6L1.6 336.8l22.8-7.6L104 302.7 104 64l0-24 48 0z" />
    </Icon>
);

export default Tally;