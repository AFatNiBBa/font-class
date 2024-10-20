
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-repeat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-repeat?s=sharp-regular arrows-repeat}
 * @preview ![arrows-repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-repeat.svg)
 */
const ArrowsRepeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l0 24 48 0 0-24 0-104 318.1 0-47 47-17 17L336 249.9l17-17 88-88 17-17-17-17L353 23l-17-17L302.1 40l17 17 47 47L24 104 0 104l0 24L0 256zm504 0l0-24-48 0 0 24 0 104-310.1 0 47-47 17-17L176 262.1l-17 17L71 367l-17 17 17 17 88 88 17 17L209.9 472l-17-17-47-47L480 408l24 0 0-24 0-128z" />
    </Icon>
);

export default ArrowsRepeat;