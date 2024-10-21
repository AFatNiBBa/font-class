
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=sharp-light circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM152.3 144l41 0L256 222.4 318.7 144l41 0-89 111.2 1.3 0 0 .8 48 0 16 0 0 32-16 0-48 0 0 32 48 0 16 0 0 32-16 0-48 0 0 17 0 16-32 0 0-16 0-17-48 0-16 0 0-32 16 0 48 0 0-32-48 0-16 0 0-32 16 0 48 0 0-.8 1.3 0L152.3 144z" />
    </Icon>
);

export default CircleYen;