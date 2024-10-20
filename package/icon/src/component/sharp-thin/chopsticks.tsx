
import { Icon } from "../../index";

/**
 * A component that renders the `chopsticks` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chopsticks?s=sharp-thin chopsticks}
 * @preview ![chopsticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chopsticks.svg)
 */
const Chopsticks: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M333.9 13.1L343.1 0l12.6 9.9L407.9 51l12.6 9.9-10.6 12L24.6 510.4 0 491 333.9 13.1zM21.8 487.8l.8 .7L397.3 63 346.5 23 21.8 487.8zM564.5 72L576 61l10.4 12.2 43.1 50.3L640 135.6l-12.7 9.8L149.4 512 129 488.2 564.5 72zM151 489.3l.7 .8L616.9 133.2l-42-49L151 489.3z" />
    </Icon>
);

export default Chopsticks;