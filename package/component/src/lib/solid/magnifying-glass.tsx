
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=solid magnifying-glass}
 * @preview ![magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/magnifying-glass.svg)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default MagnifyingGlass;