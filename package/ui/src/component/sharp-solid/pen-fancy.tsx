
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=sharp-solid pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M97.1 392.3c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-88 88L224 448l37.5-99.9-97.6-97.6L64 288 9.1 480.3l88-88zm178.3-75.5L512 96 416 0 195.2 236.6l80.2 80.2z" />
    </Icon>
);

export default PenFancy;