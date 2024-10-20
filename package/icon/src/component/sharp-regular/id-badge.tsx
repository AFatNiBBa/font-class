
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-regular id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 48l0 48 128 0 0-48 80 0 0 416L48 464 48 48l80 0zM48 0L0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-416 0-48L336 0 48 0zM192 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM80 416l224 0-32-96-160 0L80 416z" />
    </Icon>
);

export default IdBadge;