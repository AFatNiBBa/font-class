
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=thin t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l176 0 0 424c0 4.4 3.6 8 8 8s8-3.6 8-8l0-424 176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L192 32 8 32z" />
    </Icon>
);

export default T;