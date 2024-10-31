
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-regular frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 144l0-48-64 0 0-64-48 0 0 64L112 96l0-64L64 32l0 64L0 96l0 48 64 0 0 224L0 368l0 48 64 0 0 64 48 0 0-64 224 0 0 64 48 0 0-64 64 0 0-48-64 0 0-224 64 0zM112 368l0-224 224 0 0 224-224 0z" />
    </Icon>
);

export default Frame;