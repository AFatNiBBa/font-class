
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ear-deaf` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear-deaf?s=sharp-duotone-solid ear-deaf}
 * @preview ![ear-deaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ear-deaf.svg)
 */
const EarDeaf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6 112-112L205.3 352 160 306.7l-22.6 22.6-112 112L2.7 464zm392-392L440 117.3l22.6-22.6 24-24L509.3 48 464 2.7 441.4 25.4l-24 24L394.7 72z" />
        <path d="M128 240c0-61.9 50.1-112 112-112s112 50.1 112 112c0 38.8-19.7 73-49.8 93.2L288 342.7l0 17.1 0 40.2c0 26.5-21.5 48-48 48l-32 0 0 64 32 0c61.9 0 112-50.1 112-112l0-24.2c39-32.2 64-81.1 64-135.8c0-97.2-78.8-176-176-176S64 142.8 64 240l64 0zm80 0c0-17.7 14.3-32 32-32s32 14.3 32 32l48 0c0-44.2-35.8-80-80-80s-80 35.8-80 80l48 0z" />
    </Icon>
);

export default EarDeaf;