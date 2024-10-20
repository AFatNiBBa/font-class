
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=sharp-regular rectangle-wide}
 * @preview ![rectangle-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle-wide.svg)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 112l0 288L48 400l0-288 544 0zM48 64L0 64l0 48L0 400l0 48 48 0 544 0 48 0 0-48 0-288 0-48-48 0L48 64z" />
    </Icon>
);

export default RectangleWide;