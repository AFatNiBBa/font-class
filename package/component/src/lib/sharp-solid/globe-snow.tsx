
import { Icon } from "../../index";

/**
 * A component that renders the `globe-snow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=sharp-solid globe-snow}
 * @preview ![globe-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/globe-snow.svg)
 */
const GlobeSnow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M380.8 384c41.5-40.7 67.2-97.3 67.2-160C448 100.3 347.7 0 224 0S0 100.3 0 224c0 62.7 25.7 119.3 67.2 160L192 384l0-32-80 0 0-16 80-80-48 0 0-16 80-80 80 80 0 16-48 0 80 80 0 16-80 0 0 32 124.8 0zM80 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM224 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM0 512l448 0-64-96L64 416 0 512z" />
    </Icon>
);

export default GlobeSnow;