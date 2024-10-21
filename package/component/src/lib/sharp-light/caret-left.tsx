
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-light caret-left}
 * @preview ![caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/caret-left.svg)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M160 128l0 256-1.7 0L43 256 158.2 128l1.7 0zm32 0l0-32-32 0-16 0L0 256 144 416l16 0 32 0 0-32 0-256z" />
    </Icon>
);

export default CaretLeft;