
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=thin percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 64 64a64 64 0 1 0 0 128zM320 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM373.7 85.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-352 352c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l352-352z" />
    </Icon>
);

export default Percent;