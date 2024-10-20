
import { Icon } from "../../index";

/**
 * A component that renders the `apple-core` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-core?s=sharp-solid apple-core}
 * @preview ![apple-core](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/apple-core.svg)
 */
const AppleCore: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 96l0-16c0-44.2 35.8-80 80-80l16 0 16 0 0 16 0 16c0 44.2-35.8 80-80 80l-16 0-16 0 0-16zM14.2 155.3C31.2 138.4 53.1 128 80 128l112 32 112-32c26.9 0 48.8 10.4 65.8 27.3C320.6 186.5 288 241.4 288 304c0 60.4 30.5 113.8 76.9 145.5C335 488.6 295.5 512 256 512l-64-16-64 16c-39.5 0-79-23.4-108.9-62.5C65.5 417.8 96 364.4 96 304c0-62.6-32.6-117.5-81.8-148.7z" />
    </Icon>
);

export default AppleCore;