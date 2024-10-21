
import { Icon } from "../../index";

/**
 * A component that renders the `voicemail` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/voicemail?s=light voicemail}
 * @preview ![voicemail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/voicemail.svg)
 */
const Voicemail: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM288 240c0 45.2-20.9 85.6-53.5 112l171 0C372.9 325.6 352 285.2 352 240c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144l-352 0C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144zM496 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default Voicemail;