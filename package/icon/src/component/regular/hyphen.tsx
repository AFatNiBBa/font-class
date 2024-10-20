
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=regular hyphen}
 * @preview ![hyphen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hyphen.svg)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 256c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Hyphen;