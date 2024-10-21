
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scythe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=sharp-duotone-solid scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192l532.3 0L573.4 0 352 0C80 0 0 192 0 192z" />
        <path d="M637.4 0l-64 0L511.7 288 416 288l-32 0 0 64 32 0 82 0L463.7 512l64 0L637.4 0z" />
    </Icon>
);

export default Scythe;