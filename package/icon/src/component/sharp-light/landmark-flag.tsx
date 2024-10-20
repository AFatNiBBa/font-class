
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=sharp-light landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32l0 32 64 0 0-32-64 0zm64 64l-64 0 0 32 192 0 16 0 0 32-16 0L48 160l-16 0 0-32 16 0 192 0 0-32 0-32 0-32 0-16 0-16 16 0 16 0 64 0 32 0 0 32 0 32 0 32-32 0zM48 352l16 0 0-160 32 0 0 160 80 0 0-160 32 0 0 160 96 0 0-160 32 0 0 160 80 0 0-160 32 0 0 160 16 0 0 32-16 0L64 384l-16 0 0-32zm440 64l0 32-16 0L40 448l-16 0 0-32 16 0 432 0 16 0zM0 480l16 0 480 0 16 0 0 32-16 0L16 512 0 512l0-32z" />
    </Icon>
);

export default LandmarkFlag;