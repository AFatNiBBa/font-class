
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=sharp-thin square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm152 96l104 0c48.6 0 88 39.4 88 88l0 8-.4 0c-4 44.9-41.7 80-87.6 80l-96 0 0 72 0 8-16 0 0-8 0-72 0-16 0-152 0-8 8 0zM256 288c39.8 0 72-32.2 72-72s-32.2-72-72-72l-96 0 0 144 96 0z" />
    </Icon>
);

export default SquareParking;