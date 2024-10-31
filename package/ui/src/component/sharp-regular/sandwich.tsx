
import { Icon } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=sharp-regular sandwich}
 * @preview ![sandwich](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sandwich.svg)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 112l0 32L48 144l0-32 416 0zM48 64L0 64l0 48 0 32 0 48 48 0 416 0 48 0 0-48 0-32 0-48-48 0L48 64zM464 400L48 400l0-32 416 0 0 32zM48 320L0 320l0 48 0 32 0 48 48 0 416 0 48 0 0-48 0-32 0-48-48 0L48 320zm94.2-103.2l-5.8-1.5-5.8 1.3-104 24L3.2 246 14 292.8l23.4-5.4 98.2-22.7 114.2 30.5 6.2 1.6 6.2-1.6 114.2-30.5 98.2 22.7 23.4 5.4L508.8 246l-23.4-5.4-104-24-5.8-1.3-5.8 1.5L256 247.2 142.2 216.8z" />
    </Icon>
);

export default Sandwich;