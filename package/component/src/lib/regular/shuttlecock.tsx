
import { Icon } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=regular shuttlecock}
 * @preview ![shuttlecock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shuttlecock.svg)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M247 48l-43.3 89.2L280 97.4 280 48l-33 0zM168.5 209.6l-38.9 80L159 319l75.9-75.9 25.7-81.5-92.1 48zM328 40l0 40 72 0c17.7 0 32 14.3 32 32l0 72 40 0c22.1 0 40 17.9 40 40l0 46c0 15.3-8.7 29.3-22.5 36l-242 117.5c-.7 1.4-1.7 2.7-2.8 3.8l-51.5 51.5c-21.2 21.2-50 33.1-80 33.1C50.7 512 0 461.3 0 398.9c0-30 11.9-58.8 33.1-80l51.5-51.5c1.2-1.2 2.5-2.1 3.8-2.8L206 22.5C212.7 8.7 226.7 0 242 0l46 0c22.1 0 40 17.9 40 40zM222.3 382.3l80-38.9 48-92.1-81.5 25.7L193 353l29.4 29.4zm70.4-163.1L384 190.4l0-62.4-62.4 0-28.8 91.2zM188.1 416L96 323.9 73.3 346.6l92.1 92.1L188.1 416zm-48.4 42.3l-86-86C50 380.6 48 389.6 48 398.9c0 36 29.2 65.1 65.1 65.1c9.2 0 18.3-2 26.6-5.7zm235.1-150L464 265l0-33-49.4 0-39.7 76.3z" />
    </Icon>
);

export default Shuttlecock;