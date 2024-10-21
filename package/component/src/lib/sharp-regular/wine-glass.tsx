
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=sharp-regular wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64.2 176l191.6 0 1.9 21c5.2 57.5-40 107-97.7 107s-102.9-49.5-97.7-107l1.9-21zm4.4-48l7.3-80 168.3 0 7.3 80L68.6 128zM32 0L14.5 192.7C7.4 270.1 61.9 337.8 136 350l0 114-88 0 0 48 112 0 112 0 0-48-88 0 0-114c74.1-12.2 128.6-80 121.5-157.4L288 0 32 0z" />
    </Icon>
);

export default WineGlass;