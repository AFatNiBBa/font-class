
import { Icon } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=sharp-solid circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm-96 48c0 53 43 96 96 96s96-43 96-96c0-49.2-37-89.8-84.7-95.3l44.4-48.4L326.6 128l-65.1 0-68.1 74.3c-21.4 23.4-33.3 54-33.3 85.7z" />
    </Icon>
);

export default Circle_6;