
import { Icon } from "../../index";

/**
 * A component that renders the `pencil` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil?s=sharp-light pencil}
 * @preview ![pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pencil.svg)
 */
const Pencil: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l6.8-34L32 352 361.4 22.6 384 0l22.6 22.6 82.7 82.7L512 128l-22.6 22.6L160 480 34 505.2 0 512zM176 400l0 18.7L398.1 196.7l-82.7-82.7L93.3 336l18.7 0 16 0 0 16 0 32 32 0 16 0 0 16zm-32 48l0-32-32 0-16 0 0-16 0-32-32 0c-.9 0-1.7-.1-2.5-.2L40.8 471.2l103.4-20.7c-.1-.8-.2-1.7-.2-2.5zM420.7 174.1L466.7 128 384 45.3 337.9 91.3l82.7 82.7zm-89.4 28.7l-128 128L192 342.1l-22.6-22.6 11.3-11.3 128-128L320 168.8l22.6 22.6-11.3 11.3z" />
    </Icon>
);

export default Pencil;