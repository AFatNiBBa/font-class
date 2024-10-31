
import { Icon } from "../../index";

/**
 * A component that renders the `taco` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=sharp-light taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path d="M325.9 86.1L256 32 186.1 86.1 97.8 83.4 73.1 168.3 0 218l22.2 61.8c7.3-10.1 15.2-19.7 23.7-28.7l-7.4-20.5 52.6-35.8 9.5-6.5 3.2-11 17.8-61.1 63.6 2 11.5 .4 9.1-7L256 72.5l50.3 38.9 9.1 7 11.5-.4 63.6-2 17.8 61.1 3.2 11 9.5 6.5 52.6 35.8L466.1 251c8.5 9.1 16.4 18.7 23.7 28.7L512 218l-73.1-49.7L414.2 83.4l-88.3 2.7zM256 224c123.7 0 224 100.3 224 224L32 448c0-123.7 100.3-224 224-224zM0 448l0 32 32 0 448 0 32 0 0-32c0-141.4-114.6-256-256-256S0 306.6 0 448zm112-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Taco;