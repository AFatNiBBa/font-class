
import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=light road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M217.6 32c-26.9 0-50.9 16.8-60.1 42L40.5 394c-15.3 41.8 15.7 86 60.1 86L384 480l0-32-48 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-203.4 0c-22.2 0-37.7-22.1-30.1-43L187.5 85c4.6-12.6 16.6-21 30.1-21L304 64l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 86.4 0c13.4 0 25.4 8.4 30.1 21l30.8 84.3c9.7-4.2 20.1-7.1 31-8.4L482.5 74c-9.2-25.2-33.2-42-60.1-42L217.6 32zM336 208c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm192 16c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default RoadLock;