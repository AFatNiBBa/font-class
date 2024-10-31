
import { Icon } from "../../index";

/**
 * A component that renders the `id-card` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=sharp-thin id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l0 64 544 0 0-64L16 48zm0 80l0 336 544 0 0-336L16 128zM0 32l16 0 544 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM192 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM102.2 416l-16.9 0L112 336l160 0 26.7 80-16.9 0-21.3-64-136.9 0-21.3 64zM352 224l8 0 144 0 8 0 0 16-8 0-144 0-8 0 0-16zm0 64l8 0 144 0 8 0 0 16-8 0-144 0-8 0 0-16zm0 64l8 0 144 0 8 0 0 16-8 0-144 0-8 0 0-16z" />
    </Icon>
);

export default IdCard;