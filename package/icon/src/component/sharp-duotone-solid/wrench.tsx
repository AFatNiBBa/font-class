
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wrench` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=sharp-duotone-solid wrench}
 * @preview ![wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wrench.svg)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l96 96L297.5 310.5c-44.5-16.1-79.9-51.5-96-96L0 416zm70.1-8L104 374.1 137.9 408 104 441.9 70.1 408z" />
        <path d="M352 320c88.4 0 160-71.6 160-160c0-23.5-5.1-45.8-14.1-65.9L400 192l-80 0 0-80 97.9-97.9C397.8 5.1 375.5 0 352 0C263.6 0 192 71.6 192 160s71.6 160 160 160z" />
    </Icon>
);

export default Wrench;