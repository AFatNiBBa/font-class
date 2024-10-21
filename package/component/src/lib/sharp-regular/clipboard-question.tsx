
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-question` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-question?s=sharp-regular clipboard-question}
 * @preview ![clipboard-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clipboard-question.svg)
 */
const ClipboardQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 64l-32 0-33.6 0C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L80 64 48 64 0 64l0 48L0 464l0 48 48 0 288 0 48 0 0-48 0-352 0-48-48 0zM80 112l0 48 112 0 112 0 0-48 32 0 0 352L48 464l0-352 32 0zm88-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM104 248l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L168 300.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L160 192c-30.9 0-56 25.1-56 56zm64 152l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default ClipboardQuestion;