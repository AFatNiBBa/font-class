
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=sharp-solid octagon-xmark}
 * @preview ![octagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/octagon-xmark.svg)
 */
const OctagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160L0 352 160 512l192 0L512 352l0-192L352 0 160 0 0 160zm353.9 32l-17 17-47 47 47 47 17 17L320 353.9l-17-17-47-47-47 47-17 17L158.1 320l17-17 47-47-47-47-17-17L192 158.1l17 17 47 47 47-47 17-17L353.9 192z" />
    </Icon>
);

export default OctagonXmark;