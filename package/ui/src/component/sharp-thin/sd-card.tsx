
import { Icon } from "../../index";

/**
 * A component that renders the `sd-card` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=sharp-thin sd-card}
 * @preview ![sd-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sd-card.svg)
 */
const SdCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 16l0 480L16 496l0-361.4L134.6 16 368 16zM128 0L0 128 0 496l0 16 16 0 352 0 16 0 0-16 0-480 0-16L368 0 128 0zm48 72l0-8-16 0 0 8 0 80 0 8 16 0 0-8 0-80zm64 0l0-8-16 0 0 8 0 80 0 8 16 0 0-8 0-80zm64 0l0-8-16 0 0 8 0 80 0 8 16 0 0-8 0-80z" />
    </Icon>
);

export default SdCard;