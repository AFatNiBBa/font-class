
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-solid reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208L192 384l32 0 0-96 80 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176l-112 0 0-96-32 0L0 208z" />
    </Icon>
);

export default Reply;