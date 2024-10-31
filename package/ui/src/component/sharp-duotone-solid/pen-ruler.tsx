
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=sharp-duotone-solid pen-ruler}
 * @preview ![pen-ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-ruler.svg)
 */
const PenRuler: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L105.4 233.4l128-128L195.3 67.3l-56 56L128 134.6 105.4 112l11.3-11.3 56-56L128 0 0 128zM278.6 406.6L384 512 512 384l-44.7-44.7-56 56L400 406.6 377.4 384l11.3-11.3 56-56-38.1-38.1-128 128z" />
        <path d="M0 512L32 352 292.7 91.3l128 128L160 480 0 512zM443.3 196.7l-128-128L384 0 512 128l-68.7 68.7z" />
    </Icon>
);

export default PenRuler;