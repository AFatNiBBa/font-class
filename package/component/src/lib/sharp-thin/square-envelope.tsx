
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=sharp-thin square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zM368 160l0 22.8-3.8 2.3L224 270.6 83.8 185.2 80 182.8 80 160l288 0zm0 41.6L368 352 80 352l0-150.4 139.8 85.3 4.2 2.5 4.2-2.5L368 201.6zM80 144l-16 0 0 16 0 192 0 16 16 0 288 0 16 0 0-16 0-192 0-16-16 0L80 144z" />
    </Icon>
);

export default SquareEnvelope;