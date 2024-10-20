
import { Icon } from "../../index";

/**
 * A component that renders the `shekel-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shekel-sign?s=regular shekel-sign}
 * @preview ![shekel-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shekel-sign.svg)
 */
const ShekelSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 32C26.7 32 16 42.7 16 56l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24L64 80l120 0c39.8 0 72 32.2 72 72l0 184c0 13.3 10.7 24 24 24s24-10.7 24-24l0-184c0-66.3-53.7-120-120-120L40 32zM312 480c66.3 0 120-53.7 120-120l0-304c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 304c0 39.8-32.2 72-72 72l-120 0 0-248c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 272c0 13.3 10.7 24 24 24l144 0z" />
    </Icon>
);

export default ShekelSign;