
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=light toilet-portable}
 * @preview ![toilet-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/toilet-portable.svg)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 64l0 32 256 0 0-32c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64zm0 64l0 320 256 0 0-112-24 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l24 0 0-80L32 128zM320 64l0 144 0 32 0 64 0 32 0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16L32 480l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64zM264 240c-4.4 0-8 3.6-8 8l0 48c0 4.4 3.6 8 8 8l24 0 0-64-24 0z" />
    </Icon>
);

export default ToiletPortable;