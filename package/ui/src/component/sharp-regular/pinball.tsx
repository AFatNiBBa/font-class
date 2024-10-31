
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=sharp-regular pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM81.1 333.6c0 0 0 0 .1 0L312 408 126.8 251.2c-20.3-17-50.5-14.3-67.6 6s-14.4 50.6 6 67.7c4.5 3.8 9.8 6.8 15.9 8.8zM66.3 379.3c-12.1-3.9-22.8-10-32-17.7c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3-29.6 55.7L66.3 379.3zM96 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Pinball;