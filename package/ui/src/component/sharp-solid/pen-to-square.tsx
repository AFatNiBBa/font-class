
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=sharp-solid pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 272L128 384l112-16L436.7 171.3l-96-96L144 272zM512 96L416 0 363.3 52.7l96 96L512 96zM32 64L0 64 0 96 0 480l0 32 32 0 384 0 32 0 0-32 0-160 0-32-64 0 0 32 0 128L64 448l0-320 128 0 32 0 0-64-32 0L32 64z" />
    </Icon>
);

export default PenToSquare;