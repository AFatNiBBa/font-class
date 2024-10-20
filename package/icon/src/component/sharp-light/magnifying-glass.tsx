
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=sharp-light magnifying-glass}
 * @preview ![magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/magnifying-glass.svg)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L510.5 487.9l-22.6 22.6L343.3 366z" />
    </Icon>
);

export default MagnifyingGlass;