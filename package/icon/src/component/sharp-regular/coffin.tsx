
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=sharp-regular coffin}
 * @preview ![coffin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/coffin.svg)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M140.3 464l103.4 0 87.5-309.7L248.5 48l-113 0L52.8 154.3 140.3 464zM280 512l-176 0L0 144 112 0 272 0 384 144 280 512z" />
    </Icon>
);

export default Coffin;