
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=regular martini-glass-empty}
 * @preview ![martini-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/martini-glass-empty.svg)
 */
const MartiniGlassEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 35.3C0 15.8 15.8 0 35.3 0L476.7 0C496.2 0 512 15.8 512 35.3c0 9.4-3.7 18.3-10.3 25L280 281.9 280 464l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-104 0-104 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0 0-182.1L10.3 60.3C3.7 53.7 0 44.7 0 35.3zM256 238.1L446.1 48 65.9 48 256 238.1z" />
    </Icon>
);

export default MartiniGlassEmpty;