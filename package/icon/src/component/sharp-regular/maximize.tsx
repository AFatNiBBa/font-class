
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-regular maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M72 232l33.9-33.9L135 169l87 87-87 87-29.1-29.1L72 280 38.1 313.9 32 320l0 112 0 48 48 0 112 0 6.1-6.1L232 440l-33.9-33.9L169 377l87-87 87 87-29.1 29.1L280 440l33.9 33.9L320 480l112 0 48 0 0-48 0-112-6.1-6.1L440 280l-33.9 33.9L377 343l-87-87 87-87 29.1 29.1L440 232l33.9-33.9L480 192l0-112 0-48-48 0L320 32l-6.1 6.1L280 72l33.9 33.9L343 135l-87 87-87-87 29.1-29.1L232 72 198.1 38.1 192 32 80 32 32 32l0 48 0 112 6.1 6.1L72 232zm8-75.9L80 80l76.1 0L80 156.1zM156.1 432L80 432l0-76.1L156.1 432zm199.8 0L432 355.9l0 76.1-76.1 0zm0-352L432 80l0 76.1L355.9 80z" />
    </Icon>
);

export default Maximize;