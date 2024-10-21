
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-light t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 160 0 0 400 0 16 32 0 0-16 0-400 160 0 16 0 0-32-16 0L192 32 16 32z" />
    </Icon>
);

export default T;