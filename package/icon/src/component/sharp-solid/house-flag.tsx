
import { Icon } from "../../index";

/**
 * A component that renders the `house-flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flag?s=sharp-solid house-flag}
 * @preview ![house-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-flag.svg)
 */
const HouseFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 0l0 32 128 0 0 160-128 0 0 320-64 0 0-320 0-160 0-32 64 0zM416 165.2L416 512l-96 0 0-160-128 0 0 160L64.1 512l0-224.4L0 287.6 0 240 256.4 32 416 165.2z" />
    </Icon>
);

export default HouseFlag;