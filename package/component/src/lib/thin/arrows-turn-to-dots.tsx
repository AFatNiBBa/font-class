
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-turn-to-dots` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-turn-to-dots?s=thin arrows-turn-to-dots}
 * @preview ![arrows-turn-to-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-turn-to-dots.svg)
 */
const ArrowsTurnToDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M274.3 34.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L211.3 120 440 120c39.8 0 72 32.2 72 72l0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56c0-30.9-25.1-56-56-56l-228.7 0 74.3 74.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3l88-88zm-36.7 256l88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L300.7 392 72 392c-30.9 0-56 25.1-56 56l0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56c0-39.8 32.2-72 72-72l228.7 0-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM448 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM16 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm112 0A64 64 0 1 1 0 128a64 64 0 1 1 128 0z" />
    </Icon>
);

export default ArrowsTurnToDots;