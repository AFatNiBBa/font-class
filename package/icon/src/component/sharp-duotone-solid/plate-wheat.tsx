
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plate-wheat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plate-wheat?s=sharp-duotone-solid plate-wheat}
 * @preview ![plate-wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plate-wheat.svg)
 */
const PlateWheat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 136l24 0 112 0 24 0 0 48-24 0L24 184 0 184l0-48zM32 64l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm0 144l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zM160 32l16 0c44.2 0 80 35.8 80 80l0 32-16 0c-44.2 0-80-35.8-80-80l0-32zm0 224c0-44.2 35.8-80 80-80l16 0 0 32c0 44.2-35.8 80-80 80l-16 0 0-32zM272 32l16 0c44.2 0 80 35.8 80 80l0 32-16 0c-44.2 0-80-35.8-80-80l0-32zm0 224c0-44.2 35.8-80 80-80l16 0 0 32c0 44.2-35.8 80-80 80l-16 0 0-32zM384 32l16 0c44.2 0 80 35.8 80 80l0 32-16 0c-44.2 0-80-35.8-80-80l0-32zm0 224c0-44.2 35.8-80 80-80l16 0 0 32c0 44.2-35.8 80-80 80l-16 0 0-32z" />
        <path d="M512 320L0 320c0 59.6 40.8 109.8 96 124l0 36 320 0 0-36c55.2-14.2 96-64.3 96-124z" />
    </Icon>
);

export default PlateWheat;