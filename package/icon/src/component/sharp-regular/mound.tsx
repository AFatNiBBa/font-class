
import { Icon } from "../../index";

/**
 * A component that renders the `mound` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=sharp-regular mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M491.2 368L84.8 368l99-165c22-36.6 61.5-59 104.2-59s82.3 22.4 104.2 59l99 165zm56 0L433.4 178.3C402.7 127.2 347.6 96 288 96s-114.7 31.2-145.4 82.3L28.8 368 0 416l56 0 464 0 56 0-28.8-48z" />
    </Icon>
);

export default Mound;