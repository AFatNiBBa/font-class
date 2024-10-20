
import { Icon } from "../../index";

/**
 * A component that renders the `share` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=sharp-solid share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 208L320 384l-32 0 0-96-80 0c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176l112 0 0-96 32 0L512 208z" />
    </Icon>
);

export default Share;