
import { Icon } from "../../index";

/**
 * A component that renders the `bell` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=sharp-solid bell}
 * @preview ![bell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bell.svg)
 */
const Bell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 0L192 0l0 51.2C119 66 64 130.6 64 208l0 88L0 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L256 0zm32 448l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
    </Icon>
);

export default Bell;