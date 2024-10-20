
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=regular right-to-line}
 * @preview ![right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/right-to-line.svg)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 146.2L302 256 192 365.8l0-53.8c0-13.3-10.7-24-24-24L48 288l0-64 120 0c13.3 0 24-10.7 24-24l0-53.8zM352 256c0-11.5-4.6-22.5-12.7-30.6L223.2 109.6c-8.7-8.7-20.5-13.6-32.8-13.6c-25.6 0-46.4 20.8-46.4 46.4l0 33.6-96 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0 0 33.6c0 25.6 20.8 46.4 46.4 46.4c12.3 0 24.1-4.9 32.8-13.6L339.3 286.6c8.1-8.1 12.7-19.1 12.7-30.6zM400 88l0 336c0 13.3 10.7 24 24 24s24-10.7 24-24l0-336c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default RightToLine;