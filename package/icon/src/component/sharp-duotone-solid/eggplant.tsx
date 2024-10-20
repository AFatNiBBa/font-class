
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eggplant` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eggplant?s=sharp-duotone-solid eggplant}
 * @preview ![eggplant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eggplant.svg)
 */
const Eggplant: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 336c1.4 95.3 79.8 175.9 176.4 176c141.3 .1 243.8-164.1 287.4-293.5c-10.6-3.5-21.2-7.1-31.7-10.6c-5.3-16-10.7-32-16-48c-16-5.3-32-10.7-48-16c-5.3-16-10.7-32-16-48c-16-5.3-32-10.7-48-16c-2.2-6.7-4.5-13.4-6.7-20.2c-34.2 34.2-81 56.9-127.4 79.4C83.4 181.3-1.6 222.5 0 336z" />
        <path d="M480 65.9l31.4-31.4L477.4 .6 446.1 32 288 32l16 48 48 16 16 48 48 16 16 48 48 16 0-158.1z" />
    </Icon>
);

export default Eggplant;