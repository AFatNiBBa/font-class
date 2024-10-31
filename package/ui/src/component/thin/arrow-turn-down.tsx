
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=thin arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 16c-4.4 0-8-3.6-8-8S3.6 0 8 0L128 0c39.8 0 72 32.2 72 72l0 412.7L338.3 346.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-152 152c-3.1 3.1-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L184 484.7 184 72c0-30.9-25.1-56-56-56L8 16z" />
    </Icon>
);

export default ArrowTurnDown;