
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=light dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M220.1 35.6L47.9 136.2l176 101.2L400 133l-172-97.5 11.6-20.4L228.1 35.5c-2.5-1.4-5.5-1.4-8 .1zM32 164l0 202.6c0 2.9 1.6 5.6 4.1 7L208 469.9l0-204.6L32 164zM240 469.9l171.9-96.3c2.5-1.4 4.1-4.1 4.1-7l0-205.8L240 265.1l0 204.8zM203.9 7.9c12.3-7.2 27.5-7.3 39.9-.3L427.7 112c12.5 7.1 20.3 20.4 20.3 34.8l0 219.9c0 14.5-7.8 27.8-20.5 34.9l-184 103c-12.1 6.8-26.9 6.8-39.1 0l-184-103C7.8 394.4 0 381.1 0 366.6L0 150.1c0-14.2 7.5-27.4 19.8-34.5L203.9 7.9z" />
    </Icon>
);

export default DiceD6;