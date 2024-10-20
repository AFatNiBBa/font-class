
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=sharp-solid pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM34.3 361.6c9.2 7.7 19.9 13.8 32 17.7l307.8 99.1 29.6-55.7-246-208.3c-40.6-34.1-101.2-28.8-135.2 11.8S-6.3 327.5 34.3 361.6zM64 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Pinball;