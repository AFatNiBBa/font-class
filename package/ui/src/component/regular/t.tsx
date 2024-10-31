
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=regular t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l144 0 0 376c0 13.3 10.7 24 24 24s24-10.7 24-24l0-376 144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L192 32 24 32z" />
    </Icon>
);

export default T;