
import { Icon } from "../../index";

/**
 * A component that renders the `person-swimming` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-swimming?s=regular person-swimming}
 * @preview ![person-swimming](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-swimming.svg)
 */
const PersonSwimming: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 160a64 64 0 1 0 128 0A64 64 0 1 0 32 160zM80 334.1C62.8 349 41 360.8 18.8 365.8C5.9 368.7-2.3 381.5 .6 394.5s15.7 21.1 28.7 18.2C58 406.2 81.6 392.2 96 382.2c28.1 19.5 61.4 33.8 96 33.8s67.9-14.3 96-33.8c28.1 19.5 61.4 33.8 96 33.8s67.9-14.3 96-33.8c14.4 10 38 24 66.7 30.4c12.9 2.9 25.8-5.2 28.7-18.2s-5.2-25.8-18.2-28.7c-22-4.9-44.3-16.7-61.3-31.8c-9.1-8.1-22.8-8.1-31.9 0c-21.5 18.6-51.2 33.9-80 33.9s-58.5-15.3-80-33.9c-9.1-8.1-22.8-8.1-31.9 0c-21.5 18.6-51.2 33.9-80 33.9s-58.5-15.3-80-33.9c-9.1-8.1-22.8-8.1-31.9 0zM256.5 193.9L403 318.1c13.8-3.2 27.9-9.6 40.2-18c2.4-1.7 4.9-3.2 7.5-4.5L295.9 164.3C319.7 151.4 347 144 376 144l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-119.3 0-216 96.7-216 216l0 2.2c10.8 4 21.9 6.2 32 6.2c5.4 0 10.7-.5 16-1.6l0-6.9c0-46.1 18.5-87.8 48.5-118.1z" />
    </Icon>
);

export default PersonSwimming;