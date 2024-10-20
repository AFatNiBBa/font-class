
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jar-wheat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar-wheat?s=sharp-duotone-solid jar-wheat}
 * @preview ![jar-wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jar-wheat.svg)
 */
const JarWheat: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64l32 0 256 0 32 0 0 448L0 512 0 64zm64 96c0 35.3 28.7 64 64 64l16 0 32 0 16 0c35.3 0 64-28.7 64-64l-48 0c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7l-48 0zm0 96c0 35.3 28.7 64 64 64l16 0 32 0 16 0c35.3 0 64-28.7 64-64l-48 0c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7l-48 0zm0 96c0 35.3 28.7 64 64 64l16 0 0 32 0 16 32 0 0-16 0-32 16 0c35.3 0 64-28.7 64-64l-48 0c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7l-48 0z" />
        <path d="M288 0L32 0l0 64 256 0 0-64zM192 320c35.3 0 64-28.7 64-64l-48 0c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7l-48 0c0 35.3 28.7 64 64 64l16 0 32 0 16 0zm0-96c35.3 0 64-28.7 64-64l-48 0c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7l-48 0c0 35.3 28.7 64 64 64l16 0 32 0 16 0zm0 192c35.3 0 64-28.7 64-64l-48 0c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7l-48 0c0 35.3 28.7 64 64 64l16 0 0 32 0 16 32 0 0-16 0-32 16 0z" />
    </Icon>
);

export default JarWheat;