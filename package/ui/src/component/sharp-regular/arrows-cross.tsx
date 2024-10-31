
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=sharp-regular arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M280 32l-24 0 0 48 24 0 86.1 0L18.2 427.8l-17 17 33.9 33.9 17-17L400 113.9l0 86.1 0 24 48 0 0-24 0-144 0-24-24 0L280 32zM52.2 50.2l-17-17L1.3 67.2l17 17 147 147 34.3-33.6L52.2 50.2zM366.1 432L280 432l-24 0 0 48 24 0 144 0 24 0 0-24 0-144 0-24-48 0 0 24 0 86.1L278.7 276.8l-34.3 33.6L366.1 432z" />
    </Icon>
);

export default ArrowsCross;