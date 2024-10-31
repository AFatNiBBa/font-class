
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-box` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-box?s=sharp-regular hand-holding-box}
 * @preview ![hand-holding-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hand-holding-box.svg)
 */
const HandHoldingBox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 48l0 80 64-32 64 32 0-80 80 0 0 160-288 0 0-160 80 0zM144 0L96 0l0 48 0 160 0 48 48 0 288 0 48 0 0-48 0-160 0-48L432 0 144 0zm24 304l-7.3 0-6 4-90 60L24 368 0 368l0 48 24 0 48 0 7.3 0 6-4 90-60L360 352l0 32-40 0-24 0-40 0-24 0 0 48 24 0 40 0 24 0 48 0 32 0 7 0 5.9-3.7 80.4-51 15 24L416.6 464 24 464 0 464l0 48 24 0 400 0 7.4 0 6.1-4.2 116.8-80 19-13-12.2-19.5-40-64-12.8-20.5-20.4 13L408 374.5l0-46.5 0-24-24 0-216 0z" />
    </Icon>
);

export default HandHoldingBox;