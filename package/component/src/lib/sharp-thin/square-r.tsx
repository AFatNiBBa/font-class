
import { Icon } from "../../index";

/**
 * A component that renders the `square-r` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-r?s=sharp-thin square-r}
 * @preview ![square-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-r.svg)
 */
const SquareR: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm128 96l8 0 104 0c44.2 0 80 35.8 80 80l0 8-.4 0c-3.5 35.5-30.3 64.2-64.9 70.7L325 384l-19.7 0-69.3-96-3.9 0-88 0 0 88 0 8-16 0 0-8 0-96 0-144 0-8zm16 144l88 0 8 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-96 0 0 128z" />
    </Icon>
);

export default SquareR;