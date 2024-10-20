
import { Icon } from "../../index";

/**
 * A component that renders the `link` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=sharp-thin link}
 * @preview ![link](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/link.svg)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M580.2 244.7c50-50 50-131 0-181s-131-50-181 0l-17 17L393.5 92l17-17c43.7-43.7 114.7-43.7 158.4 0s43.7 114.7 0 158.4L433.1 369.1c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4l39.6-39.6L303 159.8l-39.6 39.6c-50 50-50 131 0 181s131 50 181 0L580.2 244.7zM59.8 267.3c-50 50-50 131 0 181s131 50 181 0l17-17L246.5 420l-17 17c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4L206.9 142.9c43.7-43.7 114.7-43.7 158.4 0s43.7 114.7 0 158.4l-39.6 39.6L337 352.2l39.6-39.6c50-50 50-131 0-181s-131-50-181 0L59.8 267.3z" />
    </Icon>
);

export default Link;