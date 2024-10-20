
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=sharp-regular infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l202.4 0L320 221 437.6 96 640 96l0 320-202.4 0L320 291 202.4 416 0 416 0 96zM287 256L181.6 144 48 144l0 224 133.6 0L287 256zm65.9 0L458.4 368 592 368l0-224-133.6 0L353 256z" />
    </Icon>
);

export default Infinity;