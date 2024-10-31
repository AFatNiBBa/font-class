
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=thin shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 32C33.9 32 16 49.9 16 72l0 400c0 4.4 3.6 8 8 8s8-3.6 8-8L32 72c0-13.3 10.7-24 24-24l136 0c48.6 0 88 39.4 88 88l0 216c0 4.4 3.6 8 8 8s8-3.6 8-8l0-216c0-57.4-46.6-104-104-104L56 32zM328 480c57.4 0 104-46.6 104-104l0-336c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 336c0 48.6-39.4 88-88 88l-136 0c-13.3 0-24-10.7-24-24l0-272c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 272c0 22.1 17.9 40 40 40l136 0z" />
    </Icon>
);

export default ShekelSign;