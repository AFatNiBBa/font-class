
import { Icon } from "../../index";

/**
 * A component that renders the `sd-card` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=sharp-solid sd-card}
 * @preview ![sd-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sd-card.svg)
 */
const SdCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L352 0 128 0 114.7 0l-9.4 9.4-96 96L0 114.7 0 128 0 480l0 32 32 0 320 0 32 0 0-32 0-448 0-32zM160 88l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm80 0l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm80 0l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24z" />
    </Icon>
);

export default SdCard;