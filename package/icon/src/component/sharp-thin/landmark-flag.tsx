
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=sharp-thin landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 16l0 64-96 0 0-40 0-24 96 0zM256 96l96 0 16 0 0-16 0-64 0-16L352 0 256 0 240 0l0 16 0 40 0 24 0 16 0 48L40 144l-8 0 0 16 8 0 432 0 8 0 0-16-8 0-216 0 0-48zM80 200l0-8-16 0 0 8 0 176 0 8 8 0 112 0 16 0 112 0 16 0 112 0 8 0 0-8 0-176 0-8-16 0 0 8 0 168-104 0 0-168 0-8-16 0 0 8 0 168-112 0 0-168 0-8-16 0 0 8 0 168L80 368l0-168zM40 432l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L40 432zM8 496l-8 0 0 16 8 0 496 0 8 0 0-16-8 0L8 496z" />
    </Icon>
);

export default LandmarkFlag;