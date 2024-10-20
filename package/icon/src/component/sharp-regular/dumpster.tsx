
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=sharp-regular dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32L0 160l114.9 0L140.5 32 32 32zM272 160l0-128-98.9 0L147.5 160 272 160zm32 0l124.5 0L402.9 32 304 32l0 128zm157.1 0L576 160 544 32 435.5 32l25.6 128zM86.4 240l403.3 0-20 160-363.3 0-20-160zM42 272L64 448l0 8 0 24 48 0 0-24 0-8 352 0 0 8 0 24 48 0 0-24 0-8 22-176 18 0 24 0 0-48-24 0-12 0 4-32-48.4 0L80.4 192 32 192l4 32-12 0L0 224l0 48 24 0 18 0z" />
    </Icon>
);

export default Dumpster;