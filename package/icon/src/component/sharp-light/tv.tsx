
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=sharp-light tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l0 384 576 0 0-384L32 32zM0 0L32 0 608 0l32 0 0 32 0 384 0 32-32 0L32 448 0 448l0-32L0 32 0 0zM112 480l416 0 16 0 0 32-16 0-416 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Tv;