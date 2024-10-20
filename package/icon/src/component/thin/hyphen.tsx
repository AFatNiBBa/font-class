
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=thin hyphen}
 * @preview ![hyphen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hyphen.svg)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 256c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Hyphen;