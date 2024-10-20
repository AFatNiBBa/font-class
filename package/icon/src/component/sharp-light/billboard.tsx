
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=sharp-light billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 16l0-16L400 0l0 16 0 16L240 32l0-16 0-16L208 0l0 16 0 16L64 32 32 32l0 32 0 288L0 352l0 32 32 0 32 0 240 0 0 104 0 16 32 0 0-16 0-104 240 0 32 0 32 0 0-32-32 0 0-288 0-32-32 0L432 32l0-16zM336 352l-32 0L64 352 64 64l144 0 0 64-16 0-16 0 0 32 16 0 32 0 32 0 16 0 0-32-16 0-16 0 0-64 160 0 0 64-16 0-16 0 0 32 16 0 32 0 32 0 16 0 0-32-16 0-16 0 0-64 144 0 0 288-240 0z" />
    </Icon>
);

export default Billboard;