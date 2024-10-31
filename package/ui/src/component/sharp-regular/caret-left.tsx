
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-regular caret-left}
 * @preview ![caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caret-left.svg)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M192 144l0-48-48 0L0 256 144 416l48 0 0-48 0-224zM144 344.2L64.6 256 144 167.8l0 176.5z" />
    </Icon>
);

export default CaretLeft;