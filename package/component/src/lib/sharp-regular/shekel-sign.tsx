
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=sharp-regular shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 32L16 32l0 24 0 400 0 24 48 0 0-24L64 80l120 0c39.8 0 72 32.2 72 72l0 184 0 24 48 0 0-24 0-184c0-66.3-53.7-120-120-120L40 32zM312 480c66.3 0 120-53.7 120-120l0-304 0-24-48 0 0 24 0 304c0 39.8-32.2 72-72 72l-120 0 0-248 0-24-48 0 0 24 0 272 0 24 24 0 144 0z" />
    </Icon>
);

export default ShekelSign;