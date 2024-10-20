
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=sharp-regular hyphen}
 * @preview ![hyphen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hyphen.svg)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 232l24 0 272 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
    </Icon>
);

export default Hyphen;