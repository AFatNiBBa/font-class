
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=regular arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0c48.6 0 88-39.4 88-88l0-342.1 87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L209 7c-9.4-9.4-24.6-9.4-33.9 0L47 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87L168 424c0 22.1-17.9 40-40 40L24 464z" />
    </Icon>
);

export default ArrowTurnUp;