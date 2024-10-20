
import { Icon } from "../../index";

/**
 * A component that renders the `sd-card` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=sharp-light sd-card}
 * @preview ![sd-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sd-card.svg)
 */
const SdCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 32l0 448L32 480l0-338.7L141.3 32 352 32zM128 0L0 128 0 480l0 32 32 0 320 0 32 0 0-32 0-448 0-32L352 0 128 0zm64 80l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm64 0l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm64 0l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default SdCard;