
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=sharp-light chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32l64 0 0 192 32 0 0-192 0-32L352 0 96 0 64 0l0 32 0 192 32 0L96 32l64 0 0 192 32 0 0-192 64 0 0 192 32 0 0-192zM67.8 288l312.4 0 32 64L35.8 352l32-64zM448 352l-48-96L48 256 0 352l0 32 32 0 0 112 0 16 32 0 0-16 0-112 320 0 0 112 0 16 32 0 0-16 0-112 32 0 0-32z" />
    </Icon>
);

export default Chair;