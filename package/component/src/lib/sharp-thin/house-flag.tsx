
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=sharp-thin house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 0L448 0l0 8 0 24s0 0 0 0l0 16 0 128 0 16s0 0 0 0l0 320 16 0 0-320 160 0 16 0 0-16 0-128 0-16-16 0L464 32l0-24 0-8zm0 176l0-128 160 0 0 128-160 0zm-48-38L276.8 33.6 272 30l-4.8 3.6-256 192-6.4 4.8 9.6 12.8 6.4-4.8L64 206l0 298 0 8 8 0 344 0 0-16-64 0 0-168 0-8-8 0-144 0-8 0 0 8 0 168L80 496l0-302L272 50 416 158l0-20zM336 336l0 160-128 0 0-160 128 0z" />
    </Icon>
);

export default HouseFlag;