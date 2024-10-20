
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=sharp-regular notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L24 0 360 0l24 0 0 24 0 464 0 24-24 0L24 512 0 512l0-24L0 24 0 0zM48 421.8L162.8 256 48 90.2l0 331.7zM77.2 464l229.6 0L192 298.2 77.2 464zm144-208L336 421.8l0-331.7L221.2 256zM306.8 48L77.2 48 192 213.8 306.8 48z" />
    </Icon>
);

export default Notdef;