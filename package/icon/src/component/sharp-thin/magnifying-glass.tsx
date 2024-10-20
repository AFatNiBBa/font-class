
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=sharp-thin magnifying-glass}
 * @preview ![magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/magnifying-glass.svg)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 208A192 192 0 1 0 16 208a192 192 0 1 0 384 0zM349.3 360.6C312.2 395 262.6 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 54.6-21 104.2-55.4 141.3L511.3 499.9l-11.3 11.3L349.3 360.6z" />
    </Icon>
);

export default MagnifyingGlass;