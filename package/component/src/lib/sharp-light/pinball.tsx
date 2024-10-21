
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=sharp-light pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 128a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM76.2 348.9c0 0 0 0 0 0l282.2 90.9 4.9-9.2L137.1 239c0 0 0 0 0 0C110 216.3 69.7 219.8 47 246.9s-19.2 67.5 7.9 90.2c6.1 5.1 13.2 9.1 21.3 11.8zm-9.9 30.4c-12.1-3.9-22.8-10-32-17.7c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3-29.6 55.7L66.3 379.3zM72 288a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Pinball;