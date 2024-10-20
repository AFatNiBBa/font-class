
import { Icon } from "../../index";

/**
 * A component that renders the `mound` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=light mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512.7 384L63.3 384 171.9 195.2C195.8 153.6 240.1 128 288 128s92.2 25.6 116.1 67.2L512.7 384zM288 96c-59.4 0-114.2 31.7-143.9 83.2L35.6 368c-12.3 21.3 3.1 48 27.7 48l449.4 0c24.6 0 40-26.6 27.7-48L431.9 179.2C402.2 127.7 347.4 96 288 96z" />
    </Icon>
);

export default Mound;