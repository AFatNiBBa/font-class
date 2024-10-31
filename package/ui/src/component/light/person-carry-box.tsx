
import { Icon } from "../../index";

/**
 * A component that renders the `person-carry-box` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-carry-box?s=light person-carry-box}
 * @preview ![person-carry-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-carry-box.svg)
 */
const PersonCarryBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 56a24 24 0 1 1 48 0A24 24 0 1 1 56 56zm80 0A56 56 0 1 0 24 56a56 56 0 1 0 112 0zM0 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-130.5L1.6 341.6c-.5-.4-1.1-.9-1.6-1.3L0 496zM60 176c7 0 13.8 1.5 20 4.2l0 139.3L39.1 292.2c-4.5-3-7.1-8-7.1-13.3L32 204c0-15.5 12.5-28 28-28zm52 38.5l37.8 58.8c5.9 9.2 16 14.7 26.9 14.7l47.3 0 16 0 112 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L224 96c-17.7 0-32 14.3-32 32l0 128-15.3 0-47.8-74.4C113.9 158.2 87.9 144 60 144c-33.1 0-60 26.9-60 60l0 74.9c0 16 8 31 21.4 39.9l100.2 66.8 22.7 113.5c1.7 8.7 10.2 14.3 18.8 12.6s14.3-10.2 12.6-18.8L153 379.4c-1.7-8.3-6.6-15.6-13.6-20.3L112 340.8l0-126.3zM224 256l0-128 128 0 0 128-112 0-16 0z" />
    </Icon>
);

export default PersonCarryBox;