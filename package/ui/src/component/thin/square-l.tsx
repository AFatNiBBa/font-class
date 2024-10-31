
import { Icon } from "../../index";

/**
 * A component that renders the `square-l` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-l?s=thin square-l}
 * @preview ![square-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-l.svg)
 */
const SquareL: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 40l0 224c0 4.4 3.6 8 8 8l160 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-160 0c-13.3 0-24-10.7-24-24l0-224c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default SquareL;