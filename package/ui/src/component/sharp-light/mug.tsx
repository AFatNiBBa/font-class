
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=sharp-light mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 96l0 320 320 0 0-320-16 0L64 96zm352 0l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0zm0 192l0 128 0 32-32 0L64 448l-32 0 0-32L32 96l0-32 32 0 304 0 16 0 32 0 48 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0z" />
    </Icon>
);

export default Mug;