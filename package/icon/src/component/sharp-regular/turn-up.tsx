
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=sharp-regular turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120 320l0 48-48 0-24 0L0 368l0 48 0 48 0 48 48 0 168 0 48 0 0-48 0-208 0-48 40 0 8 0 40 0 0-48L225.9 33.9 192 0 158.1 33.9 32 160l0 48 40 0 8 0 40 0 0 48 0 64zM99.9 160L192 67.9 284.1 160 264 160l-48 0 0 48 0 256L48 464l0-48 72 0 48 0 0-48 0-160 0-48-48 0-20.1 0z" />
    </Icon>
);

export default TurnUp;