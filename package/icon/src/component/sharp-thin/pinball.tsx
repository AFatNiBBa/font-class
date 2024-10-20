
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=sharp-thin pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM71.3 364.1c-10.1-3.3-19-8.3-26.6-14.7c-33.9-28.4-38.3-78.9-9.9-112.8s78.8-38.3 112.7-9.9c0 0 0 0 0 0L383.5 426.7l-17.3 32.4-295-95s0 0 0 0zm-36.9-2.5c9.2 7.7 19.9 13.8 32 17.7l307.8 99.1 29.6-55.7-246-208.3c-40.6-34.1-101.2-28.8-135.2 11.8S-6.3 327.5 34.3 361.6zM112 288a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM96 256a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Pinball;