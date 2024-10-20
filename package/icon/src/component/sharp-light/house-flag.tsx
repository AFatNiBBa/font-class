
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=sharp-light house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 0L448 0l0 16 0 16 0 32 0 96 0 32 0 320 32 0 0-320 128 0 32 0 0-32 0-96 0-32-32 0L480 32l0-16 0-16zm0 160l0-96 128 0 0 96-128 0zm-64-24L281.6 35.2 272 28l-9.6 7.2-256 192 19.2 25.6L64 224l0 272 0 16 16 0 336 0 0-32-72 0 0-144 0-16-16 0-112 0-16 0 0 16 0 144L96 480l0-280L272 68 416 176l0-40zM312 352l0 128-80 0 0-128 80 0z" />
    </Icon>
);

export default HouseFlag;