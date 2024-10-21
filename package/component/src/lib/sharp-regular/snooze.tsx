
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=sharp-regular snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M184 0L160 0l0 48 24 0 62.1 0-79 79-7 7 0 9.9 0 8 0 24 24 0 112 0 24 0 0-48-24 0-62.1 0 79-79 7-7 0-9.9 0-8 0-24L296 0 184 0zM312 224l-24 0 0 48 24 0 66.1 0-84.2 96.2L288 375l0 9 0 8 0 24 24 0 112 0 24 0 0-48-24 0-66.1 0 84.2-96.2L448 265l0-9 0-8 0-24-24 0-112 0zM24 224L0 224l0 48 24 0 132.9 0L5.1 465.2 0 471.7 0 480l0 8 0 24 24 0 176 0 24 0 0-48-24 0L67.1 464 218.9 270.8l5.1-6.5 0-8.3 0-8 0-24-24 0L24 224z" />
    </Icon>
);

export default Snooze;