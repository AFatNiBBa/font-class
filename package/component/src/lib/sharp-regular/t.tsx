
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-regular t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 144 0 0 376 0 24 48 0 0-24 0-376 144 0 24 0 0-48-24 0L192 32 24 32z" />
    </Icon>
);

export default T;