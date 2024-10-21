
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=duotone clipboard-check}
 * @preview ![clipboard-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clipboard-check.svg)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-49.6 0c.2 .8 .3 1.6 .4 2.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7c.1-.8 .3-1.6 .4-2.3L64 64C28.7 64 0 92.7 0 128zM72 320c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17L177 401c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L79 337c-4.7-4.7-7-10.8-7-17z" />
        <path d="M113.2 66.3C93.9 72.6 80 90.7 80 112l0 24c0 13.3 10.7 24 24 24l88 0 88 0c13.3 0 24-10.7 24-24l0-24c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0s-72.4 28.7-78.8 66.3zM168 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM305 273c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L305 273z" />
    </Icon>
);

export default ClipboardCheck;