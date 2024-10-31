
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=sharp-light wine-glass-empty}
 * @preview ![wine-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wine-glass-empty.svg)
 */
const WineGlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M46.4 195.6L61.2 32l197.6 0 14.9 163.6C279.7 262.4 227.1 320 160 320S40.3 262.4 46.4 195.6zM176 351.1c78.1-8.5 136.8-78.3 129.5-158.5L288 0 32 0 14.5 192.7C7.2 272.8 65.9 342.7 144 351.1L144 480l-64 0-16 0 0 32 16 0 80 0 80 0 16 0 0-32-16 0-64 0 0-128.9z" />
    </Icon>
);

export default WineGlassEmpty;