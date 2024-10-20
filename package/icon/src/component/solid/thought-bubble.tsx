
import { Icon } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=solid thought-bubble}
 * @preview ![thought-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/thought-bubble.svg)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M374.8 80.3C355.9 33.2 309.8 0 256 0s-99.9 33.2-118.8 80.3c-3-.2-6.1-.3-9.2-.3C57.3 80 0 137.3 0 208s57.3 128 128 128c14.4 0 28.3-2.4 41.3-6.8C184.7 361.6 217.7 384 256 384s71.3-22.4 86.7-54.8c12.9 4.4 26.8 6.8 41.3 6.8c70.7 0 128-57.3 128-128s-57.3-128-128-128c-3.1 0-6.1 .1-9.2 .3zM144 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default ThoughtBubble;