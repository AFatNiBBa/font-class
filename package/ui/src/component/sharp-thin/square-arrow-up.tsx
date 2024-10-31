
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up?s=sharp-thin square-arrow-up}
 * @preview ![square-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-up.svg)
 */
const SquareArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm229.7 98.3l104 104 5.7 5.7L328 251.3l-5.7-5.7L232 155.3 232 376l0 8-16 0 0-8 0-220.7-90.3 90.3-5.7 5.7L108.7 240l5.7-5.7 104-104 5.7-5.7 5.7 5.7z" />
    </Icon>
);

export default SquareArrowUp;