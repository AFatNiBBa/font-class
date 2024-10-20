
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter-symbol` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter-symbol?s=thin helicopter-symbol}
 * @preview ![helicopter-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/helicopter-symbol.svg)
 */
const HelicopterSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M493.9 224l16.1 0C495.6 108.2 403.8 16.4 288 2l0 16.1C395 32.4 479.6 117.1 493.9 224zM510 288l-16.1 0C479.6 395 395 479.6 288 493.9l0 16.1c115.8-14.4 207.6-106.2 222-222zM2 288C16.4 403.8 108.2 495.6 224 510l0-16.1C117 479.6 32.4 395 18.1 288L2 288zm0-64l16.1 0C32.4 117 117.1 32.4 224 18.1L224 2C108.2 16.4 16.4 108.2 2 224zm166-80c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 224c0 4.4 3.6 8 8 8s8-3.6 8-8l0-104 176 0 0 104c0 4.4 3.6 8 8 8s8-3.6 8-8l0-224c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 104-176 0 0-104z" />
    </Icon>
);

export default HelicopterSymbol;