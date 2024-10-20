
import { Icon, generic } from "../../index";

/**
 * A component that renders the `voicemail` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/voicemail?s=sharp-duotone-solid voicemail}
 * @preview ![voicemail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/voicemail.svg)
 */
const Voicemail: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 240a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm119.8 0c15.3-22.9 24.2-50.4 24.2-80c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144l352 0c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80l-112.5 0zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Voicemail;