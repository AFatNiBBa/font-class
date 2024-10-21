
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip-vertical` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip-vertical?s=regular paperclip-vertical}
 * @preview ![paperclip-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/paperclip-vertical.svg)
 */
const PaperclipVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 108C48 48.4 96.4 0 156 0s108 48.4 108 108l0 236c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-192c0-13.3 10.7-24 24-24s24 10.7 24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-236c0-33.1-26.9-60-60-60s-60 26.9-60 60l0 260c0 53 43 96 96 96s96-43 96-96l0-216c0-13.3 10.7-24 24-24s24 10.7 24 24l0 216c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-260z" />
    </Icon>
);

export default PaperclipVertical;