
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-light shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 32L32 32l0 16 0 416 0 16 32 0 0-16L64 64l128 0c44.2 0 80 35.8 80 80l0 192 0 16 32 0 0-16 0-192c0-61.9-50.1-112-112-112L48 32zM304 480c61.9 0 112-50.1 112-112l0-320 0-16-32 0 0 16 0 320c0 44.2-35.8 80-80 80l-128 0 0-272 0-16-32 0 0 16 0 288 0 16 16 0 144 0z" />
    </Icon>
);

export default ShekelSign;