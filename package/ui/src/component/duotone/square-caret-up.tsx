
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=duotone square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96 296c0-5.9 2.2-11.8 6.4-16.3l104-112c4.5-4.9 10.9-7.7 17.6-7.7s13 2.8 17.6 7.7l104 112c4.2 4.5 6.4 10.4 6.4 16.3c0 3.2-.7 6.5-2 9.6c-3.8 8.7-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4c-1.3-3.1-2-6.3-2-9.6z" />
        <path d="M241.6 167.7c-4.5-4.9-10.9-7.7-17.6-7.7s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9s12.5 14.4 22 14.4l208 0c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112z" />
    </Icon>
);

export default SquareCaretUp;