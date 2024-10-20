
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-regular rectangle}
 * @preview ![rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle.svg)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 112l0 288L48 400l0-288 416 0zM48 64L0 64l0 48L0 400l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0L48 64z" />
    </Icon>
);

export default Rectangle;