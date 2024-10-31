
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-thin envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 167.6l240 165 240-165L496 80 16 80l0 87.6zM496 187L256 352 16 187l0 245 480 0 0-245zM0 432L0 176 0 80 0 64l16 0 480 0 16 0 0 16 0 96 0 256 0 16-16 0L16 448 0 448l0-16z" />
    </Icon>
);

export default Envelope;