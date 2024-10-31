
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=regular martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M35.3 0C15.8 0 0 15.8 0 35.3c0 9.4 3.7 18.3 10.3 25L232 281.9 232 464l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-182.1L501.7 60.3c6.6-6.6 10.3-15.6 10.3-25C512 15.8 496.2 0 476.7 0L35.3 0zM318.1 176L256 238.1 193.9 176l124.1 0zm48-48l-220.1 0-80-80 380.1 0-80 80z" />
    </Icon>
);

export default MartiniGlass;