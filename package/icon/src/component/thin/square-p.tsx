
import { Icon } from "../../index";

/**
 * A component that renders the `square-p` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=thin square-p}
 * @preview ![square-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-p.svg)
 */
const SquareP: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm152 32l88 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-96 0 0 72c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-80 0-144c0-13.3 10.7-24 24-24zm88 160c39.8 0 72-32.2 72-72s-32.2-72-72-72l-88 0c-4.4 0-8 3.6-8 8l0 136 96 0z" />
    </Icon>
);

export default SquareP;