
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=sharp-thin skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M295.8 220.7C330.3 200.2 352 165.9 352 128c0-60.1-55.5-112-128-112S96 67.9 96 128c0 37.9 21.7 72.2 56.2 92.7l7.8 4.7 0 9.1 0 37.6 128 0 0-37.6 0-9.1 7.8-4.7zM368 128c0 44.4-25.4 83.5-64 106.4l0 37.6 0 16-16 0-128 0-16 0 0-16 0-37.6c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM176 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-80 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM436.1 511L224 393.2 11.9 511 4.1 497 207.5 384 4.1 271l7.8-14L224 374.8 436.1 257l7.8 14L240.5 384 443.9 497l-7.8 14z" />
    </Icon>
);

export default SkullCrossbones;