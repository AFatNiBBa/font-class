
import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=solid down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 432l240 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-72-72L372.7 171.3c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3L331.3 75.3C324.1 68.1 314.2 64 304 64s-20.1 4.1-27.3 11.3L142.6 209.4l-72-72c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 240c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default DownLeft;