
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=light shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 32C53.5 32 32 53.5 32 80l0 384c0 8.8 7.2 16 16 16s16-7.2 16-16L64 80c0-8.8 7.2-16 16-16l112 0c44.2 0 80 35.8 80 80l0 192c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-61.9-50.1-112-112-112L80 32zM304 480c61.9 0 112-50.1 112-112l0-320c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 320c0 44.2-35.8 80-80 80l-112 0c-8.8 0-16-7.2-16-16l0-256c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 256c0 26.5 21.5 48 48 48l112 0z" />
    </Icon>
);

export default ShekelSign;