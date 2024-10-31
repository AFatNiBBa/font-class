
import { Icon } from "../../index";

/**
 * A component that renders the `square-r` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=thin square-r}
 * @preview ![square-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-r.svg)
 */
const SquareR: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm152 32l88 0c44.2 0 80 35.8 80 80c0 38.8-27.6 71.1-64.2 78.4l70.4 84.4c2.8 3.4 2.4 8.4-1 11.3s-8.4 2.4-11.3-1L236.3 288 144 288l0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-96 0-128c0-13.3 10.7-24 24-24zm88 144c35.3 0 64-28.7 64-64s-28.7-64-64-64l-88 0c-4.4 0-8 3.6-8 8l0 120 96 0z" />
    </Icon>
);

export default SquareR;