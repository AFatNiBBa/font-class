
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=sharp-solid diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 352L64 352l0 64 384 0 0-64zm64-64l0 64 0 64 0 64-64 0L64 480 0 480l0-64 0-64 0-64 64 0 168 0 0-64-40 0-32 0 0-32 73.4-73.4L256 96l22.6 22.6L352 192l0 32-32 0-40 0 0 64 168 0 64 0zM0 32l512 0 0 192-128 0 0-32 0-13.3-9.4-9.4-96-96L256 50.7 233.4 73.4l-96 96-9.4 9.4 0 13.3 0 32L0 224 0 32z" />
    </Icon>
);

export default DiagramPrevious;