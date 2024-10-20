
import { Icon } from "../../index";

/**
 * A component that renders the `toothbrush` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toothbrush?s=sharp-solid toothbrush}
 * @preview ![toothbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toothbrush.svg)
 */
const Toothbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 160c0-35.3 28.7-64 64-64l224 0c37.7 0 40-33.2 40-64c57.4 0 120 31.6 120 96c0 53-43 96-96 96L64 224 0 224l0-64zm80 96l0 24 0 136 32 0 0-136 0-24 48 0 0 24 0 136 32 0 0-136 0-24 48 0 0 24 0 136 32 0 0-136 0-24 48 0 0 24 0 136 32 0 0-136 0-24 48 0 0 24 0 136 144 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0 0-136 0-24 48 0z" />
    </Icon>
);

export default Toothbrush;