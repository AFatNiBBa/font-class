
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-paintbrush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-paintbrush?s=sharp-duotone-solid pen-paintbrush}
 * @preview ![pen-paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-paintbrush.svg)
 */
const PenPaintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.8 80L80 .8l39.6 39.6L226.3 147.1l-79.2 79.2L40.4 119.6 .8 80zM290.6 423.9L423.9 290.6c50.4 11 88.1 55.8 88.1 109.4l0 48 64 0 0 64-176 0c-53.6 0-98.5-37.7-109.4-88.1z" />
        <path d="M32 512L64 352 324.7 91.3l128 128L192 480 32 512zM475.3 196.7l-128-128L416 0 544 128l-68.7 68.7z" />
    </Icon>
);

export default PenPaintbrush;