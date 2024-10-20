
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=light tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 320c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 64zM112 480l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Tv;