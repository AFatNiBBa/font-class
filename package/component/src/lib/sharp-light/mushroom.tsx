
import { Icon } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=sharp-light mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M131.2 105.6C148.7 128.9 176.6 144 208 144c45.8 0 84.1-32.1 93.7-75c40.7 9.1 76.9 30.2 104.7 59.3c-2.1-.2-4.2-.3-6.4-.3c-35.3 0-64 28.7-64 64s28.7 64 64 64c25.2 0 47.1-14.6 57.5-35.8c4.3 16.6 6.5 33.9 6.5 51.8l0 16L48 288l0-16c0-68 32.7-128.5 83.2-166.4zm27.1-17.3C187.4 72.8 220.7 64 256 64c4.7 0 9.3 .2 13.9 .5C262.6 91.8 237.7 112 208 112c-20.1 0-38-9.2-49.7-23.7zM496 288l0-16C496 139.5 388.5 32 256 32S16 139.5 16 272l0 16 0 32 32 0 416 0 32 0 0-32zM179.7 352l-14.8 96L160 480l32.4 0 127.2 0 32.4 0-4.9-32-14.8-96-32.4 0 14.8 96-117.4 0 14.8-96-32.4 0zM128 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm208-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Mushroom;