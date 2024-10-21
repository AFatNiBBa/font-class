
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=light square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c9.6 0 18.7 4 25.2 11l95.5 102.8c4.7 5.1 7.3 11.8 7.3 18.7c0 15.2-12.3 27.5-27.5 27.5l-201 0C108.3 320 96 307.7 96 292.5c0-6.9 2.6-13.6 7.3-18.7L198.8 171c6.5-7 15.6-11 25.2-11zm-1.7 32.7L133.8 288l180.3 0-88.4-95.3c-.4-.5-1.1-.7-1.7-.7s-1.3 .3-1.7 .7z" />
    </Icon>
);

export default SquareCaretUp;