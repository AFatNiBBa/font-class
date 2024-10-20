
import { Icon } from "../../index";

/**
 * A component that renders the `plane-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-slash?s=sharp-solid plane-slash}
 * @preview ![plane-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plane-slash.svg)
 */
const PlaneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M514.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-72.8 0L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 190 147.5L192 0l96 0L397.7 192l116.6 0zM40.6 128L362.5 381.6 288 512l-96 0 54.9-192L144 320 96 384l-64 0L64 256 32 128l8.6 0z" />
    </Icon>
);

export default PlaneSlash;