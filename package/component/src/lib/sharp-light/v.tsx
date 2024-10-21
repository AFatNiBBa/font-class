
import { Icon } from "../../index";

/**
 * A component that renders the `v` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=sharp-light v}
 * @preview ![v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/v.svg)
 */
const V: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M349 32l34.5 0L206.8 470l-4 10-21.6 0-4-10L.5 32 35 32 192 421.2 349 32z" />
    </Icon>
);

export default V;