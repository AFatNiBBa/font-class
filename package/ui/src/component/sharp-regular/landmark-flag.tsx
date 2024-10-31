
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=sharp-regular landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0L240 0l0 128L48 128l-24 0 0 48 24 0 416 0 24 0 0-48-24 0-192 0 0-32 96 0 0-96L272 0zM112 208l-48 0 0 176-8 0-24 0 0 48 24 0 400 0 24 0 0-48-24 0-8 0 0-176-48 0 0 176-64 0 0-176-48 0 0 176-64 0 0-176-48 0 0 176-64 0 0-176zM0 464l0 48 24 0 464 0 24 0 0-48-24 0L24 464 0 464z" />
    </Icon>
);

export default LandmarkFlag;