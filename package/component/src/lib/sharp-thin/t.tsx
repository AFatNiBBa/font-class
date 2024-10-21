
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-thin t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 176 0 0 424 0 8 16 0 0-8 0-424 176 0 8 0 0-16-8 0L200 32l-8 0-8 0L8 32z" />
    </Icon>
);

export default T;