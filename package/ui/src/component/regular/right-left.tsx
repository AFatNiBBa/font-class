
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=regular right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 215c0 22.6 18.3 41 41 41c10.9 0 21.3-4.3 29-12l99-99c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17l-99-99c-7.7-7.7-18.1-12-29-12c-22.6 0-41 18.3-41 41l0 63L24 104c-13.3 0-24 10.7-24 24s10.7 24 24 24l312 0 0 63zm118.1-87L384 198.1l0-140.1L454.1 128zM135 256c-10.9 0-21.3 4.3-29 12L7 367c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l99 99c7.7 7.7 18.1 12 29 12c22.6 0 41-18.3 41-41l0-63 312 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-312 0 0-63c0-22.6-18.3-41-41-41zm-7 198.1L57.9 384 128 313.9l0 140.1z" />
    </Icon>
);

export default RightLeft;