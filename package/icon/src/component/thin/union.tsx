
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=thin union}
 * @preview ![union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/union.svg)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 32c4.4 0 8 3.6 8 8l0 264c0 88.4 71.6 160 160 160s160-71.6 160-160l0-264c0-4.4 3.6-8 8-8s8 3.6 8 8l0 264c0 97.2-78.8 176-176 176S16 401.2 16 304L16 40c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default Union;