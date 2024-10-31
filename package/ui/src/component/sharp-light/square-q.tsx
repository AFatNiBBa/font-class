
import { Icon } from "../../index";

/**
 * A component that renders the `square-q` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-q?s=sharp-light square-q}
 * @preview ![square-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-q.svg)
 */
const SquareQ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 256c0 53 43 96 96 96c20.6 0 39.7-6.5 55.4-17.6L212 258.6l-2.3-2.6 42.8 0 49.6 55.8c11.3-15.7 17.9-35 17.9-55.8c0-53-43-96-96-96s-96 43-96 96zm224 0c0 30.4-10.6 58.2-28.2 80.2L364 381.4l2.3 2.6-42.8 0-22.7-25.6c-21.4 16.1-48 25.6-76.8 25.6c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </Icon>
);

export default SquareQ;