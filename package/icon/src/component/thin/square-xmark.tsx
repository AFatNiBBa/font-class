
import { Icon } from "../../index";

/**
 * A component that renders the `square-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=thin square-xmark}
 * @preview ![square-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-xmark.svg)
 */
const SquareXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm146.3 82.3c3.1-3.1 8.2-3.1 11.3 0L224 244.7l66.3-66.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L235.3 256l66.3 66.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L224 267.3l-66.3 66.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L212.7 256l-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3z" />
    </Icon>
);

export default SquareXmark;