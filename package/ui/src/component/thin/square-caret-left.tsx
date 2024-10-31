
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=thin square-caret-left}
 * @preview ![square-caret-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-caret-left.svg)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 416c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48C37.5 48 16 69.5 16 96l0 320zm48 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-7.3 3-14.3 8.4-19.3L245.6 134.8c4.7-4.4 10.8-6.8 17.2-6.8c13.9 0 25.2 11.3 25.2 25.2l0 205.6c0 13.9-11.3 25.2-25.2 25.2c-6.4 0-12.5-2.4-17.2-6.8L136.4 275.3c-5.4-5-8.4-12-8.4-19.3zm19.3 7.6L256.5 365.5c1.7 1.6 4 2.5 6.3 2.5c5.1 0 9.2-4.1 9.2-9.2l0-205.6c0-5.1-4.1-9.2-9.2-9.2c-2.3 0-4.6 .9-6.3 2.5L147.3 248.4c-2.1 2-3.3 4.7-3.3 7.6s1.2 5.6 3.3 7.6z" />
    </Icon>
);

export default SquareCaretLeft;