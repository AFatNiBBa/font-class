
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=sharp-solid droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M209.9 140.2L48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L505.5 369.7c4.2-15.8 6.5-32.5 6.5-49.7C512 214 320 0 320 0s-57.9 64.5-110.1 140.2zM456.1 455.4L159.8 221.9c-19 36.2-31.8 70.8-31.8 98.1c0 106 86 192 192 192c53.2 0 101.4-21.6 136.1-56.6zM224 336c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16 32 0 0 16z" />
    </Icon>
);

export default DropletSlash;