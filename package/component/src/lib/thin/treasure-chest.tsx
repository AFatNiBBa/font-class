
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=thin treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M136 48l0 224 80 0 0-48c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 48 80 0 0-224L136 48zM312 368l-48 0c-26.5 0-48-21.5-48-48l0-32-80 0 0 176 304 0 0-176-80 0 0 32c0 26.5-21.5 48-48 48zM120 48.3C61.9 52.4 16 100.8 16 160l0 112 104 0 0-223.7zM16 288l0 144c0 17.7 14.3 32 32 32l72 0 0-176L16 288zM456 464l72 0c17.7 0 32-14.3 32-32l0-144-104 0 0 176zM560 272l0-112c0-59.2-45.9-107.6-104-111.7L456 272l104 0zM0 160C0 89.3 57.3 32 128 32l320 0c70.7 0 128 57.3 128 128l0 272c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48L0 160zm312 32l-48 0c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zm-16 48l0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default TreasureChest;