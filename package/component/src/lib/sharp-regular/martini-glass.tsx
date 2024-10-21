
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=sharp-regular martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L0 48 222.1 270.1 232 280l0 184-80 0-24 0 0 48 24 0 104 0 104 0 24 0 0-48-24 0-80 0 0-184 9.9-9.9L512 48l0-48L464 0 48 0 0 0zM316.1 176L256 236.1 195.9 176l120.2 0zm48-48l-216.2 0-80-80 376.2 0-80 80z" />
    </Icon>
);

export default MartiniGlass;