
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=sharp-solid snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 0L160 0l0 64 32 0 33.3 0-57.6 67.2-7.7 9 0 11.8 0 8 0 32 32 0 96 0 32 0 0-64-32 0-33.3 0 57.6-67.2 7.7-9L320 40l0-8 0-32L288 0 192 0zM320 224l-32 0 0 64 32 0 33.3 0-57.6 67.2-7.7 9 0 11.8 0 8 0 32 32 0 96 0 32 0 0-64-32 0-33.3 0 57.6-67.2 7.7-9 0-11.8 0-8 0-32-32 0-96 0zM32 256L0 256l0 64 32 0 98.7 0L9.4 441.4 0 450.7 0 464l0 16 0 32 32 0 160 0 32 0 0-64-32 0-98.7 0L214.6 326.6l9.4-9.4 0-13.3 0-16 0-32-32 0L32 256z" />
    </Icon>
);

export default Snooze;