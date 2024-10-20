
import { Icon } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=solid note-medical}
 * @preview ![note-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/note-medical.svg)
 */
const NoteMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224-112 0c-26.5 0-48 21.5-48 48l0 112L64 480c-35.3 0-64-28.7-64-64L0 96zM402.7 352l45.3 0-32 32-64 64-32 32 0-45.3 0-66.7c0-8.8 7.2-16 16-16l66.7 0zM192 144l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default NoteMedical;