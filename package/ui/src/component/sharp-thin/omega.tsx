
import { Icon } from "../../index";

/**
 * A component that renders the `omega` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=sharp-thin omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48C109.1 48 16 141.1 16 256c0 78.7 43.7 147.2 108.2 182.5l4.2 2.3 0 4.7 0 26.5 0 8-8 0L8 480l-8 0 0-16 8 0 104.3 0 0-13.8C45.2 411.5 0 339.1 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 83.1-45.2 155.5-112.3 194.2l0 13.8L440 464l8 0 0 16-8 0-112.3 0-8 0 0-8 0-26.5 0-4.7 4.2-2.3C388.3 403.2 432 334.7 432 256c0-114.9-93.1-208-208-208z" />
    </Icon>
);

export default Omega;