
import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-duotone-solid id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM80 416l32-96 160 0 32 96L80 416zM128 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zM256 224a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M192 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM80 416l32-96 160 0 32 96L80 416z" />
    </Icon>
);

export default IdBadge;