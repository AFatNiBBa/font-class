
import { Icon } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=regular display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-70.5-55.2c27.4-7.2 47.6-32.2 47.6-61.9l0-288c0-35.3-28.7-64-64-64L96 0C79.6 0 64.6 6.2 53.2 16.4L38.8 5.1zm54.9 43c.7-.1 1.5-.2 2.3-.2l448 0c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-42.2 0L93.7 48.2zM80 352l0-192.8L32 121.4 32 352c0 35.3 28.7 64 64 64l147.7 0-8 48L184 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 128 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-51.7 0-8-48 9.6 0L345 368l-72.6 0c-.2 0-.4 0-.6 0c-.1 0-.2 0-.3 0L96 368c-8.8 0-16-7.2-16-16zm212.3 64l55.3 0 8 48-71.3 0 8-48z" />
    </Icon>
);

export default DisplaySlash;