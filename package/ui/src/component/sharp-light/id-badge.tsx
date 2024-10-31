
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-light id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM128 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm96 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm7.1 128l-21.3 64L80 416l32-96 160 0 32 96-33.7 0-21.3-64-113.9 0z" />
    </Icon>
);

export default IdBadge;