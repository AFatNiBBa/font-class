
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=sharp-solid dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32L0 160l114.9 0L140.5 32 32 32zM272 160l0-128-98.9 0L147.5 160 272 160zm32 0l124.5 0L402.9 32 304 32l0 128zm157.1 0L576 160 544 32 435.5 32l25.6 128zM32 192l4 32L0 224l0 64 44 0L64 448l0 32 64 0 0-32 320 0 0 32 64 0 0-32 20-160 44 0 0-64-36 0 4-32L32 192z" />
    </Icon>
);

export default Dumpster;