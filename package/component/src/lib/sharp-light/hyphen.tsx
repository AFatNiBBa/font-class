
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=sharp-light hyphen}
 * @preview ![hyphen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hyphen.svg)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 240l16 0 288 0 16 0 0 32-16 0L16 272 0 272l0-32z" />
    </Icon>
);

export default Hyphen;