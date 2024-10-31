
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=sharp-duotone-solid circle-stop}
 * @preview ![circle-stop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-stop.svg)
 */
const CircleStop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-96l192 0 0 192-192 0 0-192z" />
        <path d="M160 160h192v192H160V160z" />
    </Icon>
);

export default CircleStop;