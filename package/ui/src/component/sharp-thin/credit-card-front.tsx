
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card-front` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card-front?s=sharp-thin credit-card-front}
 * @preview ![credit-card-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/credit-card-front.svg)
 */
const CreditCardFront: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 416L16 464 16 48l544 0zM16 32L0 32 0 48 0 464l0 16 16 0 544 0 16 0 0-16 0-416 0-16-16 0L16 32zM96 288l0 16 384 0 0-16L96 288zm0 64l0 16 96 0 0-16-96 0zm288 0l-160 0 0 16 160 0 0-16zm16-240l96 0 0 80-96 0 0-80zM384 96l0 16 0 80 0 16 16 0 96 0 16 0 0-16 0-80 0-16-16 0-96 0-16 0z" />
    </Icon>
);

export default CreditCardFront;