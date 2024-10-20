
import { Icon } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-solid right}
 * @preview ![right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right.svg)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 256L256 64l-32 0 0 128L0 192 0 320l224 0 0 128 32 0L448 256z" />
    </Icon>
);

export default Right;