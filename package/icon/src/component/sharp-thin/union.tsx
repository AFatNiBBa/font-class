
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=sharp-thin union}
 * @preview ![union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/union.svg)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 8 0 264c0 88.4 71.6 160 160 160s160-71.6 160-160l0-264 0-8 16 0 0 8 0 264c0 97.2-78.8 176-176 176S16 401.2 16 304L16 40l0-8 16 0z" />
    </Icon>
);

export default Union;