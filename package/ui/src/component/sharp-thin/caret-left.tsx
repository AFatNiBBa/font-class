
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=sharp-thin caret-left}
 * @preview ![caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/caret-left.svg)
 */
const CaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M151.1 400L21.5 256 151.1 112l24.9 0 0 288-24.9 0zM0 256L144 416l32 0 16 0 0-16 0-288 0-16-16 0-32 0L0 256z" />
    </Icon>
);

export default CaretLeft;