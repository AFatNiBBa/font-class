
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down?s=sharp-thin square-arrow-down}
 * @preview ![square-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-arrow-down.svg)
 */
const SquareArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464L16 48l416 0 0 416L16 464zM0 480l16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464l0 16zm229.7-98.3l104-104 5.7-5.7L328 260.7l-5.7 5.7L232 356.7 232 136l0-8-16 0 0 8 0 220.7-90.3-90.3-5.7-5.7L108.7 272l5.7 5.7 104 104 5.7 5.7 5.7-5.7z" />
    </Icon>
);

export default SquareArrowDown;