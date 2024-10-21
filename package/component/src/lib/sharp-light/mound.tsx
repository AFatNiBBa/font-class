
import { Icon } from "../../index";

/**
 * A component that renders the `mound` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=sharp-light mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M519.5 384l-463 0L170 194.8c24.9-41.4 69.6-66.8 118-66.8s93.1 25.4 118 66.8L519.5 384zm37.3 0L433.4 178.3C402.7 127.2 347.6 96 288 96s-114.7 31.2-145.4 82.3L19.2 384 0 416l37.3 0 501.4 0 37.3 0-19.2-32z" />
    </Icon>
);

export default Mound;