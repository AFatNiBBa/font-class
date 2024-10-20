
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=sharp-light coffin}
 * @preview ![coffin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/coffin.svg)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128.2 480l127.6 0 93-329.1L256.3 32 127.7 32 35.2 150.9l93 329.1zM280 512l-176 0L0 144 112 0 272 0 384 144 280 512z" />
    </Icon>
);

export default Coffin;