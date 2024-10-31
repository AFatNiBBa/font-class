
import { Icon } from "../../index";

/**
 * A component that renders the `id-card` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=sharp-light id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 64l0 32 512 0 0-32L32 64zM0 112L0 64 0 32l32 0 512 0 32 0 0 32 0 48 0 336 0 32-32 0L32 480 0 480l0-32L0 112zm544 16L32 128l0 320 512 0 0-320zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM113.7 416L80 416l32-96 160 0 32 96-33.7 0-21.3-64-113.9 0-21.3 64zM336 192l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 64l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
    </Icon>
);

export default IdCard;