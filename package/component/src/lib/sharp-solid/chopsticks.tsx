
import { Icon } from "../../index";

/**
 * A component that renders the `chopsticks` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chopsticks?s=sharp-solid chopsticks}
 * @preview ![chopsticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chopsticks.svg)
 */
const Chopsticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M420.5 60.9L24.6 510.4 0 491 343.1 0l77.5 60.9zM576 61l64 74.6L149.4 512 129 488.2 576 61z" />
    </Icon>
);

export default Chopsticks;