
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=sharp-thin eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M166.6 464L288 464l25.4 0L383 394.3 181.7 193 38.6 336l128 128zM288 480l-128 0L27.3 347.3 16 336l11.3-11.3L324.7 27.3 336 16l11.3 11.3L548.7 228.7 560 240l-11.3 11.3L336 464l200 0 8 0 0 16-8 0-216 0-32 0zm106.3-97l143-143L336 38.6l-143 143L394.3 383z" />
    </Icon>
);

export default Eraser;