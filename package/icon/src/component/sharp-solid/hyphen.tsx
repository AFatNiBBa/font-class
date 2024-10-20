
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=sharp-solid hyphen}
 * @preview ![hyphen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hyphen.svg)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 224l32 0 256 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
    </Icon>
);

export default Hyphen;