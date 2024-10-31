
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=sharp-regular colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 112l0 48 48 0 0-48-48 0zM24 64l48 0 48 0 48 0 0 48 0 48 0 48-48 0-48 0-48 0 0-48 0-48 0-48zM72 352l0 48 48 0 0-48-48 0zM24 304l48 0 48 0 48 0 0 48 0 48 0 48-48 0-48 0-48 0 0-48 0-48 0-48z" />
    </Icon>
);

export default Colon;