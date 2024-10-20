
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=sharp-solid stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L64 0l0 96 320 0 0-96zM96 128l0 128L55.7 282.9C20.9 306.1 0 345.1 0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L352 384l0-256L96 128z" />
    </Icon>
);

export default Stocking;