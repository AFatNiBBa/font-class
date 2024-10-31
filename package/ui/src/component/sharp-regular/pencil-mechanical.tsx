
import { Icon } from "../../index";

/**
 * A component that renders the `pencil-mechanical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-mechanical?s=sharp-regular pencil-mechanical}
 * @preview ![pencil-mechanical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pencil-mechanical.svg)
 */
const PencilMechanical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M488 136l-16-16 40-40L432 0 392 40 376 24 342.1 57.9 317 83 265 31l-17-17L231 31 103 159l-17 17L120 209.9l17-17 111-111 35 35L64 336 32 448 0 480l32 32 32-32s0 0 0 0l112-32L454.1 169.9 488 136zM183 373.1L138.9 329 376 91.9 420.1 136 183 373.1zm-34.9 33l-59 16.9 16.9-59 42.2 42.2z" />
    </Icon>
);

export default PencilMechanical;