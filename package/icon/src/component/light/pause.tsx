
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=light pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 96c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L48 96zM0 112C0 85.5 21.5 64 48 64l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48L0 112zM224 96c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16l-48 0zm-48 16c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48l0-288z" />
    </Icon>
);

export default Pause;