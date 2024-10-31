
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumpster` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster?s=sharp-duotone-solid dumpster}
 * @preview ![dumpster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dumpster.svg)
 */
const Dumpster: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l114.9 0L140.5 32 32 32 0 160zm147.5 0L272 160l0-128-98.9 0L147.5 160zM304 32l0 128 124.5 0L402.9 32 304 32zm131.5 0l25.6 128L576 160 544 32 435.5 32z" />
        <path d="M64 448L44 288 0 288l0-64 36 0-4-32 512 0-4 32 36 0 0 64-44 0L512 448l0 32-64 0 0-32-320 0 0 32-64 0 0-32z" />
    </Icon>
);

export default Dumpster;