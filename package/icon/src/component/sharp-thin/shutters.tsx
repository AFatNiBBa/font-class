
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-thin shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48l0 32L16 80l0-32 480 0zM16 32L0 32 0 48 0 80 0 96l16 0 480 0 16 0 0-16 0-32 0-16-16 0L16 32zm8 96L6 176 0 192l17.1 0 477.8 0 17.1 0-6-16-18-48-17.1 0 18 48L23.1 176l18-48L24 128zM6 272L0 288l17.1 0 477.8 0 17.1 0-6-16-18-48-17.1 0 18 48L23.1 272l18-48L24 224 6 272zm18 48L6 368 0 384l17.1 0 477.8 0 17.1 0-6-16-18-48-17.1 0 18 48L23.1 368l18-48L24 320zM6 464L0 480l17.1 0 477.8 0 17.1 0-6-16-18-48-17.1 0 18 48L23.1 464l18-48L24 416 6 464z" />
    </Icon>
);

export default Shutters;