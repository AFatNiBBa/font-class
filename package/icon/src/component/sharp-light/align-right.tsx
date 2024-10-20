
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-light align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l16 0 0 32-16 0L176 80l-16 0 0-32 16 0 256 0zm0 128l16 0 0 32-16 0L16 208 0 208l0-32 16 0 416 0zm16 128l0 32-16 0-256 0-16 0 0-32 16 0 256 0 16 0zM432 432l16 0 0 32-16 0L16 464 0 464l0-32 16 0 416 0z" />
    </Icon>
);

export default AlignRight;