
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-question` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-question?s=sharp-thin clipboard-question}
 * @preview ![clipboard-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clipboard-question.svg)
 */
const ClipboardQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M254.7 67.2C248.8 38 222.9 16 192 16s-56.8 22-62.7 51.2L126.7 80l-13.1 0L80 80l0 64 112 0 112 0 0-64-33.6 0-13.1 0-2.6-12.8zM80 64l33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64L304 64l16 0 0 16 0 16 56 0 8 0 0 8 0 400 0 8-8 0L8 512l-8 0 0-8L0 104l0-8 8 0 56 0 0-16 0-16 16 0zM64 112l-48 0 0 384 352 0 0-384-48 0 0 32 0 16-16 0-112 0L80 160l-16 0 0-16 0-32zM176 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM104 264c0-30.9 25.1-56 56-56l56.2 0c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L200 358.9l0 25.1 0 8-16 0 0-8 0-29.5 0-4.3 3.6-2.4 54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8L160 224c-22.1 0-40 17.9-40 40l0 6.5-16 0 0-6.5zm72 184l0-32 32 0 0 32-32 0z" />
    </Icon>
);

export default ClipboardQuestion;