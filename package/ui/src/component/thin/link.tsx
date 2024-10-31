
import { Icon } from "../../index";

/**
 * A component that renders the `link` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=thin link}
 * @preview ![link](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/link.svg)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M580.2 244.7c50-50 50-131 0-181s-131-50-181 0l-17 17c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l17-17c43.7-43.7 114.7-43.7 158.4 0s43.7 114.7 0 158.4L433.1 369.1c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-39.6 39.6c-50 50-50 131 0 181s131 50 181 0L580.2 244.7zM59.8 267.3c-50 50-50 131 0 181s131 50 181 0l17-17c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-17 17c-43.7 43.7-114.7 43.7-158.4 0s-43.7-114.7 0-158.4L206.9 142.9c43.7-43.7 114.7-43.7 158.4 0s43.7 114.7 0 158.4l-39.6 39.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l39.6-39.6c50-50 50-131 0-181s-131-50-181 0L59.8 267.3z" />
    </Icon>
);

export default Link;