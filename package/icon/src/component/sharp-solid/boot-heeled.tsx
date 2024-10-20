
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=sharp-solid boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0L32 0l0 64L64 256 32 384l0 128 128 0 0-48 144 48 16 0 24 0 136 0 8 0 24 0 0-48-24 0-8 0 0-80L288 288 288 0 160 0l0 240 0 16-32 0 0-16L128 0z" />
    </Icon>
);

export default BootHeeled;