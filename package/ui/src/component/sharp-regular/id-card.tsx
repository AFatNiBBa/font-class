
import { Icon } from "../../index";

/**
 * A component that renders the `id-card` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card?s=sharp-regular id-card}
 * @preview ![id-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/id-card.svg)
 */
const IdCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 160l0 272-213.3 0L288 352l-160 0-26.7 80L48 432l0-272 480 0zM48 32L0 32 0 80 0 432l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L48 32zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0zm0 96l-24 0 0 48 24 0 80 0 24 0 0-48-24 0-80 0z" />
    </Icon>
);

export default IdCard;