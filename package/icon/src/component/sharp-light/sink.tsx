
import { Icon } from "../../index";

/**
 * A component that renders the `sink` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sink?s=sharp-light sink}
 * @preview ![sink](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sink.svg)
 */
const Sink: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32 0 16 32 0 0-16 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 208-80 0 0-48 0-16-16 0-96 0-16 0 0 32 16 0 80 0 0 32L16 288 0 288l0 32 16 0 112 0 32 0 80 0 32 0 80 0 32 0 112 0 16 0 0-32-16 0-112 0 0-32 80 0 16 0 0-32-16 0-96 0-16 0 0 16 0 48-80 0 0-208zM32 352l0 48c0 61.9 50.1 112 112 112l224 0c61.9 0 112-50.1 112-112l0-48-32 0 0 48c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-48-32 0z" />
    </Icon>
);

export default Sink;