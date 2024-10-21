
import { Icon } from "../../index";

/**
 * A component that renders the `dial` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=solid dial}
 * @preview ![dial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dial.svg)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM175.1 174.2c56.7-56.7 145.4-62 208-15.7L271.3 270.4c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L417.1 192.4c46.2 62.6 41 151.3-15.7 208c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3zM512 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Dial;