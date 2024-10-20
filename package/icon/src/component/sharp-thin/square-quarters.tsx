
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-thin square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M420.7 48L27.3 48 224 244.7 420.7 48zM16 59.3l0 393.4L212.7 256 16 59.3zM27.3 464l393.4 0L224 267.3 27.3 464zM432 452.7l0-393.4L235.3 256 432 452.7zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default SquareQuarters;