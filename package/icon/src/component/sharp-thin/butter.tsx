
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=sharp-thin butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 80l0 208-16 0 0-208L80 80l0 208-16 0L64 80l0-16 16 0 384 0 8 0 8 0 80 0 16 0 0 16 0 208-16 0 0-208-80 0zM0 320l8 0 24 0 16 0 544 0 16 0 24 0 8 0 0 16-8 0-24 0 0 96 0 16-16 0L48 448l-16 0 0-16 0-96L8 336l-8 0 0-16zm48 16l0 96 544 0 0-96L48 336z" />
    </Icon>
);

export default Butter;