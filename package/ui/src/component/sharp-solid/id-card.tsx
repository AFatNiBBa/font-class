
import { Icon } from "../../index";

/**
 * A component that renders the `id-card` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=sharp-solid id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32L0 96l576 0 0-64L0 32zm0 96L0 480l576 0 0-352L0 128zM64 416l32-64 160 0 32 64L64 416zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 0l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
    </Icon>
);

export default IdCard;