
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chopsticks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chopsticks?s=sharp-duotone-solid chopsticks}
 * @preview ![chopsticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chopsticks.svg)
 */
const Chopsticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 491l24.6 19.4c90.6-102.9 181.1-205.7 271.7-308.5c-20.2-16.1-40.3-32.3-60.5-48.4C157.2 266 78.6 378.5 0 491zm129-2.8L149.4 512C257 429.4 364.7 346.8 472.3 264.3c-17.8-17.8-35.5-35.5-53.2-53.2c-96.7 92.4-193.4 184.8-290 277.2z" />
        <path d="M296.3 201.9l-60.5-48.4L343.1 0l77.5 60.9-124.2 141zm175.9 62.4L419 211 576 61l64 74.6L472.3 264.3z" />
    </Icon>
);

export default Chopsticks;