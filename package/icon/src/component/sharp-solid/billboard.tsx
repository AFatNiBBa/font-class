
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=sharp-solid billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 32l0-32L384 0l0 32L256 32l0-32L192 0l0 32L96 32 32 32l0 64 0 256L0 352l0 64 32 0 64 0 192 0 0 64 0 32 64 0 0-32 0-64 192 0 64 0 32 0 0-64-32 0 0-256 0-64-64 0-96 0zM352 352l-64 0L96 352 96 96l96 0 0 32-32 0 0 64 32 0 32 0 32 0 32 0 0-64-32 0 0-32 128 0 0 32-32 0 0 64 32 0 32 0 32 0 32 0 0-64-32 0 0-32 96 0 0 256-192 0z" />
    </Icon>
);

export default Billboard;