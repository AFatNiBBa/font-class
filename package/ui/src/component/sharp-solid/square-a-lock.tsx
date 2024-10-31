
import { Icon } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=sharp-solid square-a-lock}
 * @preview ![square-a-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-a-lock.svg)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l448 0 0 129.1c-54.3 7.8-96 54.4-96 110.9l0 16-32 0-5.7 0L245.7 141.8 239.2 128l-30.5 0-6.5 13.8L88.6 384l53 0 22.5-48 119.7 0 22.5 48 13.6 0 0 96L0 480 0 32zM261.3 288l-74.6 0L224 208.5 261.3 288zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default SquareALock;