
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-solid id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM272 320l32 96L80 416l32-96 160 0zM128 224a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default IdBadge;