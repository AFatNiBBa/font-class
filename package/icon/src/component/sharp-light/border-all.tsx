
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=sharp-light border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 176-176 0 0-176 176 0zm0 208l0 176-176 0 0-176 176 0zM208 240L32 240 32 64l176 0 0 176zM32 272l176 0 0 176L32 448l0-176zM32 32L0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32z" />
    </Icon>
);

export default BorderAll;