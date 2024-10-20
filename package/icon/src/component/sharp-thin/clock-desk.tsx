
import { Icon } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=sharp-thin clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 224a208 208 0 1 1 416 0A208 208 0 1 1 16 224zm416 83.3L432 496 16 496l0-188.7C49.1 389.8 129.7 448 224 448s174.9-58.2 208-140.7zM0 224L0 504l0 8 8 0 432 0 8 0 0-8 0-280C448 100.3 347.7 0 224 0S0 100.3 0 224zM232 96l-16 0 0 8 0 120 0 3.3 2.3 2.3 56 56 5.7 5.7L291.3 280l-5.7-5.7L232 220.7 232 104l0-8z" />
    </Icon>
);

export default ClockDesk;