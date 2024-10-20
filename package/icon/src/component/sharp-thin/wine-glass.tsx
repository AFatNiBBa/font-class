
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=sharp-thin wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M35 144l-4.6 50.1C23.5 270.3 83.5 336 160 336s136.5-65.7 129.6-141.9L285 144 35 144zm1.5-16l247.1 0L273.4 16 46.6 16 36.4 128zm269.1 64.7C313 275.5 250.1 347.4 168 351.8L168 496l80 0 8 0 0 16-8 0-88 0-88 0-8 0 0-16 8 0 80 0 0-144.2c-82.1-4.4-145-76.2-137.5-159.1L32 0 288 0l17.5 192.7z" />
    </Icon>
);

export default WineGlass;