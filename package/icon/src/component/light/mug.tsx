
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=light mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 96l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256-16 0L64 96zm352 0l0 160 48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0zm0 192l0 64c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L32 96c0-17.7 14.3-32 32-32l304 0 16 0 80 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0z" />
    </Icon>
);

export default Mug;