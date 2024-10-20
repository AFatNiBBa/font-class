
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=sharp-thin border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 56l0-8-16 0 0 8 0 408L24 464l-8 0 0 16 8 0 416 0 8 0 0-8 0-416zM336 80l0-32-32 0 0 32 32 0zM144 80l0-32-32 0 0 32 32 0zm96-32l-32 0 0 32 32 0 0-32zM48 80l0-32L16 48l0 32 32 0zm0 160l-32 0 0 32 32 0 0-32zm0-64l0-32-32 0 0 32 32 0zm0 160l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default BorderBottomRight;