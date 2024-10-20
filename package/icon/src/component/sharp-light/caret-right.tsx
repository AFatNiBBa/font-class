
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-light caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M96 128l0 256 1.7 0L213 256 97.8 128 96 128zm-32 0l0-32 32 0 16 0L256 256 112 416l-16 0-32 0 0-32 0-256z" />
    </Icon>
);

export default CaretRight;