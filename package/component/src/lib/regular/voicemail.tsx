
import { Icon } from "../../index";

/**
 * A component that renders the `voicemail` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/voicemail?s=regular voicemail}
 * @preview ![voicemail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/voicemail.svg)
 */
const Voicemail: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM251.3 336c22.8-25.5 36.7-59.1 36.7-96c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144l352 0c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144c0 36.9 13.9 70.5 36.7 96l-137.3 0zM496 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Voicemail;