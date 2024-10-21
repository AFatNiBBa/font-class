
import { Icon } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=sharp-light thought-bubble}
 * @preview ![thought-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/thought-bubble.svg)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M145.1 96l18.5 0 9.2-16c16.6-28.8 47.7-48 83.2-48s66.5 19.2 83.2 48l9.2 16 18.5 0 1.1 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-33.6 0-13.1 0-9.3 9.1c-14.5 14.2-34.2 22.9-56 22.9s-41.5-8.7-56-22.9l-9.3-9.1-13.1 0L144 320C82.1 320 32 269.9 32 208S82.1 96 144 96l1.1 0zM256 0c-47.4 0-88.7 25.7-110.9 64L144 64C64.5 64 0 128.5 0 208s64.5 144 144 144l33.6 0c20.2 19.8 47.9 32 78.4 32s58.2-12.2 78.4-32l33.6 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-1.1 0C344.7 25.7 303.4 0 256 0zM160 448l-32 0 0-32 32 0 0 32zm-32-64l-32 0 0 32 0 32 0 32 32 0 32 0 32 0 0-32 0-32 0-32-32 0-32 0zM0 512l64 0 0-64L0 448l0 64z" />
    </Icon>
);

export default ThoughtBubble;