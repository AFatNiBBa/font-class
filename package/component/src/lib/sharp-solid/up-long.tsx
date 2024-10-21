
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=sharp-solid up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 0L320 160l0 32-96 0 0 320L96 512l0-320L0 192l0-32L160 0z" />
    </Icon>
);

export default UpLong;