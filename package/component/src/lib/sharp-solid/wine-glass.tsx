
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=sharp-solid wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M84.6 128l5.8-64 139.1 0 5.8 64L84.6 128zM32 0L14.5 192.7C7.7 267.3 58 332.9 128 348.5l0 99.5-80 0 0 64 112 0 112 0 0-64-80 0 0-99.5c70-15.6 120.3-81.2 113.5-155.8L288 0 32 0z" />
    </Icon>
);

export default WineGlass;