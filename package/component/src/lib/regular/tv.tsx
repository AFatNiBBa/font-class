
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=regular tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l512 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM120 464l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-400 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Tv;