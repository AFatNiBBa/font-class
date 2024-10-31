
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-light landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192l32 0 448 0 32 0 0-32 0-16L256 0 0 144l0 16 0 32zM256 36.7L475.2 160 36.8 160 256 36.7zM64 352l-16 0 0 32 16 0 384 0 16 0 0-32-16 0 0-128-32 0 0 128-80 0 0-128-32 0 0 128-96 0 0-128-32 0 0 128-80 0 0-128-32 0 0 128zM24 448l16 0 432 0 16 0 0-32-16 0L40 416l-16 0 0 32zM0 480l0 32 16 0 480 0 16 0 0-32-16 0L16 480 0 480z" />
    </Icon>
);

export default Landmark;