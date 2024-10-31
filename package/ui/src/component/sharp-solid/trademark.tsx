
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=sharp-solid trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l32 0 64 0 64 0 64 0 32 0 0 64-32 0-64 0 0 224 0 32-64 0 0-32 0-224-64 0L0 160 0 96zm288 32l0-32 48 0 9.6 12.8L464 266.7 582.4 108.8 592 96l48 0 0 32 0 256 0 32-64 0 0-32 0-160L489.6 339.2 464 373.3l-25.6-34.1L352 224l0 160 0 32-64 0 0-32 0-256z" />
    </Icon>
);

export default Trademark;