
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=sharp-thin border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 192-208 0 0-192 208 0zm0 208l0 208-208 0 0-208 208 0zM208 240L16 240 16 48l192 0 0 192zM16 256l192 0 0 208L16 464l0-208zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32z" />
    </Icon>
);

export default BorderAll;