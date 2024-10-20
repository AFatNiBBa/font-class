
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=sharp-duotone-solid mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6L217.1 340.1c-18.4-11.3-34-26.8-45.3-45.3L25.4 441.4 2.7 464z" />
        <path d="M328.3 94.1c42.7 13.2 76.4 46.9 89.6 89.6L512 224l-94.1 40.3c-13.2 42.7-46.9 76.4-89.6 89.6L288 448l-40.3-94.1c-42.7-13.2-76.4-46.9-89.6-89.6L64 224l94.1-40.3c13.2-42.7 46.9-76.4 89.6-89.6L288 0l40.3 94.1zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Mace;