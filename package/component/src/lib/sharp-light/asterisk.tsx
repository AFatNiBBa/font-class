
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=sharp-light asterisk}
 * @preview ![asterisk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/asterisk.svg)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 32l0 16 0 178.9 151.4-96.4 17.2 27L221.8 256l154.8 98.5-17.2 27L208 285.1 208 464l0 16-32 0 0-16 0-178.9L24.6 381.5l-17.2-27L162.2 256 7.4 157.5l17.2-27L176 226.9 176 48l0-16 32 0z" />
    </Icon>
);

export default Asterisk;