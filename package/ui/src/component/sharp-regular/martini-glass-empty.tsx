
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=sharp-regular martini-glass-empty}
 * @preview ![martini-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/martini-glass-empty.svg)
 */
const MartiniGlassEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L0 48 222.1 270.1 232 280l0 184-80 0-24 0 0 48 24 0 104 0 104 0 24 0 0-48-24 0-80 0 0-184 9.9-9.9L512 48l0-48L464 0 48 0 0 0zM444.1 48L256 236.1 67.9 48l376.2 0z" />
    </Icon>
);

export default MartiniGlassEmpty;