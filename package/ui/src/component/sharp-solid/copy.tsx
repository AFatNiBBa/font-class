
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-solid copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 0l96 96 0 288-288 0L160 0 352 0zM64 128l64 0 0 64-64 0 0 256 192 0 0-32 64 0 0 32 0 64-64 0L64 512 0 512l0-64L0 192l0-64 64 0z" />
    </Icon>
);

export default Copy;