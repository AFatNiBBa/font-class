
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-section` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-section?s=light pipe-section}
 * @preview ![pipe-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pipe-section.svg)
 */
const PipeSection: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32L0 368l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 576 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 0-224 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-352 0L32 128l0-16zM608 352L32 352l0-192 224 0 352 0 0 192z" />
    </Icon>
);

export default PipeSection;