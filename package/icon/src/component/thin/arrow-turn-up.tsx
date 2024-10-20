
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=thin arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l120 0c39.8 0 72-32.2 72-72l0-412.7L338.3 165.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3 184 440c0 30.9-25.1 56-56 56L8 496z" />
    </Icon>
);

export default ArrowTurnUp;