
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-xmark?s=sharp-solid rectangle-xmark}
 * @preview ![rectangle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rectangle-xmark.svg)
 */
const RectangleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM353.9 192l-17 17-47 47 47 47 17 17L320 353.9l-17-17-47-47-47 47-17 17L158.1 320l17-17 47-47-47-47-17-17L192 158.1l17 17 47 47 47-47 17-17L353.9 192z" />
    </Icon>
);

export default RectangleXmark;