
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=thin pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm46 423.7c0 0 0 0 0 0c3.7-6.7 2.1-15.4-4.2-20.3l-.2-.2-.2-.2L147.4 226.7c0 0 0 0 0 0c-33.8-28.4-84.3-24-112.7 9.9s-24 84.4 9.9 112.8c7.6 6.4 16.6 11.4 26.6 14.7c0 0 0 0 0 0L379 463.2c0 0 0 0 0 0c7.4 2.4 15.4-.9 19-7.5zM34.3 361.6c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3c12.6 9.8 15.8 27.1 8.4 40.6c-7.2 13.2-23.1 19.9-37.9 15L66.3 379.3c-12.1-3.9-22.8-10-32-17.7zM80 288a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default Pinball;