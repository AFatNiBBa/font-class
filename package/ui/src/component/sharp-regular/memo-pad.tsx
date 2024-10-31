
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=sharp-regular memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 128l0 336L48 464l0-336 352 0zM48 0L0 0 0 48 0 464l0 48 48 0 352 0 48 0 0-48 0-416 0-48L400 0 48 0zM96 176l0 48 24 0 208 0 24 0 0-48-24 0-208 0-24 0zm0 96l0 48 24 0 208 0 24 0 0-48-24 0-208 0-24 0zm0 96l0 48 24 0 112 0 24 0 0-48-24 0-112 0-24 0z" />
    </Icon>
);

export default MemoPad;