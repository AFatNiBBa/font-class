
import { Icon } from "../../index";

/**
 * A component that renders the `pen-ruler` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=sharp-solid pen-ruler}
 * @preview ![pen-ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-ruler.svg)
 */
const PenRuler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M195.3 67.3l-56 56L128 134.6 105.4 112l11.3-11.3 56-56L128 0 0 128 105.4 233.4l128-128L195.3 67.3zM384 512L512 384l-44.7-44.7-56 56L400 406.6 377.4 384l11.3-11.3 56-56-38.1-38.1-128 128L384 512zM32 352L0 512l160-32L420.7 219.3l-128-128L32 352zM512 128L384 0 315.3 68.7l128 128L512 128z" />
    </Icon>
);

export default PenRuler;