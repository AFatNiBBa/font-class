
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=sharp-thin hyphen}
 * @preview ![hyphen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hyphen.svg)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 248l8 0 304 0 8 0 0 16-8 0L8 264l-8 0 0-16z" />
    </Icon>
);

export default Hyphen;