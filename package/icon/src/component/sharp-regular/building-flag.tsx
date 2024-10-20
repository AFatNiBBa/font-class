
import { Icon } from "../../index";

/**
 * A component that renders the `building-flag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-flag?s=sharp-regular building-flag}
 * @preview ![building-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/building-flag.svg)
 */
const BuildingFlag: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 48l0 416 96 0 0-112 96 0 0 112 96 0 0-416L48 48zM0 0L48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM88 88l80 0 0 80-80 0 0-80zm208 0l0 80-80 0 0-80 80 0zM88 216l80 0 0 80-80 0 0-80zm208 0l0 80-80 0 0-80 80 0zM480 0l0 32 160 0 0 160-160 0 0 320-64 0 0-480 0-32 64 0z" />
    </Icon>
);

export default BuildingFlag;