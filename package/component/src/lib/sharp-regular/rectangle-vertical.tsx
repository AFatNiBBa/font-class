
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=sharp-regular rectangle-vertical}
 * @preview ![rectangle-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle-vertical.svg)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 464L48 464 48 48l288 0 0 416zM384 48l0-48L336 0 48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-416z" />
    </Icon>
);

export default RectangleVertical;