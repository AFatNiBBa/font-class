
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=light arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 0L16 0C7.2 0 0 7.2 0 16L0 176c0 8.8 7.2 16 16 16s16-7.2 16-16L32 54.6 300.7 323.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 32 176 32c8.8 0 16-7.2 16-16s-7.2-16-16-16zM288 64c-8.8 0-16 7.2-16 16s7.2 16 16 16c106 0 192 86 192 192s-86 192-192 192S96 394 96 288c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;