
import { Icon } from "../../index";

/**
 * A component that renders the `align-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=sharp-regular align-left}
 * @preview ![align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/align-left.svg)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 40L0 40 0 88l24 0 240 0 24 0 0-48-24 0L24 40zm0 128L0 168l0 48 24 0 400 0 24 0 0-48-24 0L24 168zM0 296l0 48 24 0 240 0 24 0 0-48-24 0L24 296 0 296zM24 424L0 424l0 48 24 0 400 0 24 0 0-48-24 0L24 424z" />
    </Icon>
);

export default AlignLeft;