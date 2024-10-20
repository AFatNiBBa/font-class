
import { Icon } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-regular right}
 * @preview ![right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/right.svg)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 224l-48 0L48 224l0 64 144 0 48 0 0 48 0 60.1L380.1 256 240 115.9l0 60.1 0 48zM192 112l0-48 48 0 16 0L414.1 222.1 448 256l-33.9 33.9L256 448l-16 0-48 0 0-48 0-16 0-48-48 0-96 0L0 336l0-48 0-64 0-48 48 0 96 0 48 0 0-48 0-16z" />
    </Icon>
);

export default Right;