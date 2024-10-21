
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=sharp-regular mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M417.9 183.7C404.7 141 371 107.3 328.3 94.1L288 0 247.7 94.1c-42.7 13.2-76.4 46.9-89.6 89.6L64 224l94.1 40.3c4.2 13.5 10.4 26.1 18.3 37.4L18.2 459.8l-17 17 33.9 33.9 17-17L210.3 335.6c11.3 7.9 23.9 14.1 37.4 18.3L288 448l40.3-94.1c42.7-13.2 76.4-46.9 89.6-89.6L512 224l-94.1-40.3zM288 136a88 88 0 1 1 0 176 88 88 0 1 1 0-176zm32 88a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Mace;