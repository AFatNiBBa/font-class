
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=sharp-regular castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 24l0-24L128 0l0 24 0 200-80 0 0-40 0-24L0 160l0 24L0 488l0 24 24 0 592 0 24 0 0-24 0-304 0-24-48 0 0 24 0 40-80 0 0-200 0-24L464 0l0 24 0 40-64 0 0-40 0-24L352 0l0 24 0 40-64 0 0-40 0-24L240 0l0 24 0 40-64 0 0-40zm0 88l288 0 0 112-288 0 0-112zM48 272l544 0 0 192-208 0 0-80c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 80L48 464l0-192z" />
    </Icon>
);

export default Castle;