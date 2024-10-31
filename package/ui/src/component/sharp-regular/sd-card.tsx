
import { Icon } from "../../index";

/**
 * A component that renders the `sd-card` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=sharp-regular sd-card}
 * @preview ![sd-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sd-card.svg)
 */
const SdCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 48l0 416L48 464l0-316.1L147.9 48 336 48zM128 0L0 128 0 464l0 48 48 0 288 0 48 0 0-48 0-416 0-48L336 0 128 0zm48 96l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm64 0l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm64 0l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default SdCard;