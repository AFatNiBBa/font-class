
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=sharp-solid unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64c-44.2 0-80 35.8-80 80l0 48 304 0 0 320L0 512 0 192l80 0 0-48C80 64.5 144.5 0 224 0c74.1 0 135.2 56 143.1 128l-64.7 0C295 91.5 262.7 64 224 64z" />
    </Icon>
);

export default Unlock;